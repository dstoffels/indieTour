import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { toursPath } from 'utils/restPaths.js';

const FETCH = 'tours/fetch';
export const fetchTours = createAsyncThunk(FETCH, async (bandId, thunkAPI) => {
	const { token, user } = thunkAPI.getState();
	console.log(toursPath(user.activeMember.bandId));

	if (token) {
		const response = await axios.get(toursPath(user.activeMember.bandId), token);
		thunkAPI.dispatch(toursSlice.actions.setTours(response.data));
	}
});

const NEW = 'tours/new';
export const createNewTour = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { token } = getState();

	if (token) {
	}
});

const initialState = [];
export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		setTours: (state, action) => action.payload,
	},
});

export const {} = toursSlice.actions;
export const tours = toursSlice.reducer;
