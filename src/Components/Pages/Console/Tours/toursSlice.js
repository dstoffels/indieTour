import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { closeDeleteModal } from 'Components/Common/DeleteModal/deleteModalSlice.js';
import { closeModal } from 'Components/Common/MainModal/mainModalSlice.js';
import { setActiveTourAndFetchDates } from 'redux/userSlice.js';
import { restPath, toursPath } from 'utils/restPaths.js';

const FETCH = 'tours/fetch';
export const fetchTours = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { token, user } = thunkAPI.getState();

	if (token) {
		const response = await axios.get(toursPath(user.activeMember.bandPath), token);
		thunkAPI.dispatch(toursSlice.actions.setTours(response.data));
	}
});

const NEW = 'tours/new';
export const createNewTour = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, token } = getState();

	if (token) {
		const response = await axios.post(toursPath(user.activeMember.bandPath), form, token);
		await dispatch(setActiveTourAndFetchDates(response.data));
		dispatch(fetchTours());
		dispatch(closeModal());
	}
});

const EDIT = 'tours/edit';
export const editTour = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, token } = getState();

	if (token) {
		const response = await axios.put(restPath(user.activeMember.activeTour.path), form, token);
		await dispatch(setActiveTourAndFetchDates(response.data));
		dispatch(closeModal());
	}
});

const DELETE = 'tours/delete';
export const deleteActiveTour = createAsyncThunk(DELETE, async (path, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { token } = getState();

	if (token) {
		const response = await axios.delete(restPath(path), token);

		dispatch(closeDeleteModal());
		dispatch(closeModal());

		dispatch(toursSlice.actions.setTours(response.data));
		dispatch(setActiveTourAndFetchDates());
	}
});

// TODO: ARCHIVE TOUR THUNK

const initialState = [];
export const toursSlice = createSlice({
	name: 'tours',
	initialState,
	reducers: {
		setTours: (state, action) => action.payload,
		clearTours: () => initialState,
	},
});

export const { clearTours } = toursSlice.actions;
export const tours = toursSlice.reducer;
