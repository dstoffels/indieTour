import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { auth } from '../../../../../firebase/firebase.js';

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const token = await auth.currentUser.getIdToken();
	console.log(token);
	const response = await axios.get('http://127.0.0.1:3002/bands', {
		headers: { auth: token },
	});

	thunkAPI.dispatch(setBands(response.data));
});

const initialState = [];
export const bandSlice = createSlice({
	name: 'bands',
	initialState,
	reducers: {
		setBands: (state, action) => (state = action.payload),
	},
});

export const { setBands } = bandSlice.actions;
export const bands = bandSlice.reducer;
