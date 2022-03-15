import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BANDS_PATH } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const headers = await authHeader();
	const response = await axios.get(BANDS_PATH, headers);

	thunkAPI.dispatch(bandSlice.actions.setUserBands(response.data));
});

const initialState = [];
export const bandSlice = createSlice({
	name: 'bands',
	initialState,
	reducers: {
		setUserBands: (state, action) => (state = action.payload),
		clearUserBands: state => (state = initialState),
	},
});

export const { clearUserBands } = bandSlice.actions;
export const bands = bandSlice.reducer;
