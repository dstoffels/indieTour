import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';

const SET_BAND = 'user/setActiveBand';
export const setActiveBand = createAsyncThunk(SET_BAND, async (memberBand, thunkAPI) => {
	const headers = await authHeader();
	const response = await axios.put(USER_PATH, { activeMember: memberBand }, headers);
	thunkAPI.dispatch(setUser(response.data));
});

const initialState = null;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
		clearUser: state => initialState,
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const user = userSlice.reducer;
