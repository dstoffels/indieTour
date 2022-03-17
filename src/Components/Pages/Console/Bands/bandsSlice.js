import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBandPath, BANDS_PATH } from 'utils/restPaths.js';
import { setActiveBandAndGetMembers } from 'redux/userSlice.js';
import { fetchMembers } from './membersSlice.js';
import { closeModal } from 'Components/Common/MainModal/mainModalSlice.js';
import { closeDeleteModal } from 'Components/Common/DeleteModal/deleteModalSlice.js';

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { token } = thunkAPI.getState();
	if (token) {
		const response = await axios.get(BANDS_PATH, token);
		thunkAPI.dispatch(bandSlice.actions.setUserBands(response.data));
	}
});

const NEW = 'bands/new';
export const createNewBand = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { token } = getState();
	if (token) {
		await axios.post(BANDS_PATH + '/new', form, token);
		await dispatch(fetchUserBands());
		await dispatch(setActiveBandAndGetMembers(form.name));
		dispatch(closeModal());
	}
});

const EDIT = 'bands/edit';
export const editBand = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, token } = getState();

	if (token) {
		const response = await axios.put(getBandPath(user.activeMember.bandId), form, token);
		await dispatch(fetchUserBands());
		await dispatch(setActiveBandAndGetMembers(response.data.bandName));
		dispatch(closeModal());
	}
});

const DELETE = 'bands/delete';
export const deleteActiveBand = createAsyncThunk(DELETE, async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, token } = getState();

	if (token) {
		const response = await axios.delete(getBandPath(user.activeMember.bandId), token);

		dispatch(closeDeleteModal());
		dispatch(closeModal(false));

		dispatch(setUserBands(response.data));
		await dispatch(setActiveBandAndGetMembers());
	}
});

const initialState = [];
export const bandSlice = createSlice({
	name: 'bands',
	initialState,
	reducers: {
		setUserBands: (state, action) => (state = action.payload),
		updateUserBands: (state, action) => {
			state = [...state, action.payload];
		},
		clearUserBands: state => (state = initialState),
	},
});

export const { clearUserBands, setUserBands } = bandSlice.actions;
export const bands = bandSlice.reducer;
