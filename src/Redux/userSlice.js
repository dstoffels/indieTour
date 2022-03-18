import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchToken } from 'Components/Auth/Authentication/authSlice.js';
import { fetchUserBands, setUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { fetchMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { fetchTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { restPath, USER_PATH } from 'utils/restPaths.js';

const FETCH = 'user/fetchUser';
export const fetchUser = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { token } = getState();

	if (token) {
		const response = await axios.get(USER_PATH, token);
		dispatch(userSlice.actions.setUser(response.data));
		await dispatch(fetchUserBands());
		await dispatch(fetchMembers());
		await dispatch(fetchTours());
	} else {
		await dispatch(fetchToken());
		dispatch(fetchUser());
	}
});

const SET_BAND = 'user/setActiveBand';
export const setActiveBandAndGetMembers = createAsyncThunk(SET_BAND, async (band, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { bands, token } = getState();

	if (token) {
		band = band ? band : bands[0];
		dispatch(setActiveMember(band));
		await axios.put(USER_PATH, { activeMember: band }, token);

		// find band in bands list and update
		// const i = bands.findIndex(b => b.bandName === band.bandName);
		// console.log(i);
		// const updatedBands = [...bands];
		// updatedBands[i] = band;
		// dispatch(setUserBands(updatedBands));

		dispatch(fetchTours());
		dispatch(fetchMembers());
	}
});

const SET_TOUR = 'user/setActiveTour';
export const setActiveTourAndFetchDates = createAsyncThunk(SET_TOUR, async (tour, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;

	// ensure tours list is up to date
	// await dispatch(fetchTours());

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
