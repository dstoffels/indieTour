import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUserBands, setUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { fetchMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { fetchTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { sortDates, sortMemberTourDates, sortTourDates } from 'utils/helpers.js';
import { restPath, USER_PATH } from 'utils/restPaths.js';
import thunkErrorHandler from './errorHandler.js';

// ACTION TYPES

const FETCH = 'user/fetchUser';
const SET_BAND = 'user/setActiveMember';
const SET_TOUR = 'user/setActiveTour';

// THUNKS

/**
 * @action user/fetchUser
 * @fetch user from firestore db.
 * @set fetched user in store
 * @fetch user's bands
 * @fetch user's selected bands' members and tours
 */
export const fetchUser = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { dispatch } = thunkAPI;

	await thunkErrorHandler(thunkAPI, async token => {
		const response = await axios.get(USER_PATH, token);
		const user = response.data;

		// ensure dates are ordered on arrival
		user.activeMember &&
			user.activeMember.activeTour.dates.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

		dispatch(setUser(user));

		// if user was just created, activeMember will be null
		if (user.activeMember) {
			await dispatch(fetchUserBands());
			await dispatch(fetchMembers());
			await dispatch(fetchTours());
		}
	});
});

/**
 * @param band band object
 * @fetch tours, members
 */
export const setActiveMemberAndGetMembers = createAsyncThunk(SET_BAND, async (member, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { bands, token } = getState();

	await thunkErrorHandler(thunkAPI, token => {
		member = member ? member : bands[0];

		// ensure dates are ordered on arrival
		const updatedMember = sortMemberTourDates(member);

		dispatch(setActiveMember(updatedMember));

		axios.put(USER_PATH, { activeMember: updatedMember || null }, token);

		if (member) {
			dispatch(fetchMembers());
			dispatch(fetchTours());
		}
	});
});

export const setActiveTourAndFetchDates = createAsyncThunk(SET_TOUR, async (tour, thunkAPI) => {
	await thunkErrorHandler(thunkAPI, async token => {
		await thunkAPI.dispatch(fetchTours());

		const { user, tours } = thunkAPI.getState();
		tour = tour ? tour : tours[0];

		// prevent dates array from being stored in db
		const { dates, ...tourSansDates } = tour;

		await axios.put(restPath(user.activeMember.path), { activeTour: tourSansDates }, token);

		// ensure dates are ordered on arrival
		const updatedTour = sortTourDates(tour);

		thunkAPI.dispatch(userSlice.actions.setUserMemberActiveTour(updatedTour));

		thunkAPI.dispatch(fetchUserBands());
	});
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
