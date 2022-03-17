import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getBandPath, BANDS_PATH } from 'utils/restPaths.js';
import { setActiveBandAndGetMembers } from 'redux/userSlice.js';
import { showDeleteBandModal } from './DeleteBandModal/DeleteBandModalSlice.js';
import { showEditBandModal } from './EditBandModal/EditBandModalSlice.js';
import { fetchMembers } from './membersSlice.js';
import { showNewBandModal } from './NewBandModal/newBandModalSlice.js';

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
		dispatch(showNewBandModal(false));
	}
});

const EDIT = 'bands/edit';
export const editBand = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, token } = getState();

	if (token) {
		const response = await axios.put(getBandPath(user.activeMember.bandId), form, token);
		dispatch(bandSlice.actions.updateUserBands(response.data));
		await dispatch(fetchMembers());
		dispatch(showEditBandModal(false));
	}
});

const DELETE = 'bands/delete';
export const deleteActiveBand = createAsyncThunk(DELETE, async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user, bands, token } = getState();

	if (token) {
		const response = await axios.delete(getBandPath(user.activeMember.bandId), token);

		dispatch(showDeleteBandModal(false));
		dispatch(showEditBandModal(false));

		dispatch(setUserBands(response.data));

		await dispatch(setActiveBandAndGetMembers(bands[0].bandName));
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
