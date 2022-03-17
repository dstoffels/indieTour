import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchToken } from 'Components/Auth/Authentication/authSlice.js';
import { fetchUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { fetchMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { fetchTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { USER_PATH } from 'utils/restPaths.js';

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
export const setActiveBandAndGetMembers = createAsyncThunk(SET_BAND, async (bandName, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { bands, token } = getState();

	if (token) {
		let memberBand = bands.find(band => band.bandName === bandName);
		memberBand = memberBand ? memberBand : bands[0];
		await axios.put(USER_PATH, { activeMember: memberBand }, token);

		dispatch(userSlice.actions.setActiveBand(memberBand));
		await dispatch(fetchMembers());
	}
});

const SET_TOUR = 'user/setActiveTour';
export const setActiveTourAndFetchDates = createAsyncThunk(SET_TOUR, async (tourName, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { tours, token } = getState();

	if (token) {
		const tour = tours.find(tour => tour.name === tourName);
		await axios.put(USER_PATH, { activeTour: tour }, token);

		dispatch(userSlice.actions.setActiveTour(tour));
		// fetch dates
	}
});

const initialState = null;
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
		setActiveBand: (state, action) => {
			state.activeMember = action.payload;
		},
		setActiveTour: (state, action) => {
			state.activeTour = action.payload;
		},
		clearUser: state => (state = initialState),
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const user = userSlice.reducer;
