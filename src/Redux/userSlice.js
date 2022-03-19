import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchToken } from 'Components/Auth/Authentication/authSlice.js';
import { fetchUserBands, setUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { fetchMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { fetchTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { restPath, USER_PATH } from 'utils/restPaths.js';
import thunkErrorHandler from './errorHandler.js';

// ACTION TYPES

const FETCH = 'user/fetchUser';
const SET_BAND = 'user/setActiveBand';
const SET_TOUR = 'user/setActiveTour';

// THUNKS

/**
 * @fetch user from firestore db.
 * @set fetched user in store
 * @fetch user's bands
 * @fetch user's selected bands' members and tours
 */
export const fetchUser = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { dispatch } = thunkAPI;

	await thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.get(USER_PATH, token);
		dispatch(userSlice.actions.setUser(response.data));
		await dispatch(fetchUserBands());
		await dispatch(fetchMembers());
		await dispatch(fetchTours());
	});
});

/**
 * @param band band object
 * @fetch tours, members
 */
export const setActiveMemberAndGetMembers = createAsyncThunk(SET_BAND, async (band, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { bands, token } = getState();

	if (token) {
		band = band ? band : bands[0];
		dispatch(setActiveMember(band));
		axios.put(USER_PATH, { activeMember: band }, token);

		dispatch(fetchTours());
		dispatch(fetchMembers());
	}
});

export const setActiveTourAndFetchDates = createAsyncThunk(SET_TOUR, async (tour, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;

	// ensure tours list is up to date
	await dispatch(fetchTours());

	const { user, tours, token } = getState();

	// TODO: tours list must be updated before this thunk on delete

	if (token) {
		tour = tour ? tour : tours[0];

		dispatch(userSlice.actions.setUserMemberActiveTour(tour));
		await axios.put(restPath(user.activeMember.path), { activeTour: tour }, token);

		dispatch(fetchUserBands());

		// fetch dates
	}
});

// REDUCER
const initialState = null;
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
		setActiveMember: (state, action) => {
			state.activeMember = action.payload;
		},
		setUserMemberActiveTour: (state, action) => {
			state.activeMember.activeTour = action.payload;
		},
		clearUser: state => (state = initialState),
	},
});

export const { setUser, setActiveMember, clearUser } = userSlice.actions;
export const user = userSlice.reducer;
