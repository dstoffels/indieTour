import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BANDS_PATH } from '../constants/restPaths.js';
import { auth } from '../firebase/firebase.js';

export const selectBand = bandName => (dispatch, getState) => {
	const { userBands } = getState().band;
	const band = userBands.find(band => band.bandName === bandName);
	dispatch(bandSlice.actions.setCurrentBand(band));
};

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const token = await auth.currentUser.getIdToken();
	const response = await axios.get(BANDS_PATH, {
		headers: { auth: token },
	});

	thunkAPI.dispatch(bandSlice.actions.setUserBands(response.data));
});

const initialState = { currentBand: null, userBands: [] };
export const bandSlice = createSlice({
	name: 'bands',
	initialState,
	reducers: {
		setCurrentBand: (state, action) => {
			state.currentBand = action.payload;
		},
		setUserBands: (state, action) => {
			state.userBands = action.payload;
		},
	},
});

// export const { setUseBands } = bandSlice.actions;
export const band = bandSlice.reducer;
