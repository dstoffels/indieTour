import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { fetchMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { USER_PATH } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';

const FETCH = 'user/fetchUser';
export const fetchUser = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { dispatch } = thunkAPI;

	const config = await authHeader();
	const response = await axios.get(USER_PATH, config);

	dispatch(userSlice.actions.setUser(response.data));
	dispatch(fetchUserBands());
	dispatch(fetchMembers());
});

const SET_BAND = 'user/setActiveBand';
export const setActiveBandAndGetMembers = createAsyncThunk(SET_BAND, async (bandName, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { bands } = getState();
	const memberBand = bands.find(band => band.bandName == bandName);

	const config = await authHeader();
	axios.put(USER_PATH, { activeMember: memberBand }, config);

	dispatch(userSlice.actions.setActiveBand(memberBand));
	dispatch(fetchMembers());
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

export const { clearUser } = userSlice.actions;
export const user = userSlice.reducer;
