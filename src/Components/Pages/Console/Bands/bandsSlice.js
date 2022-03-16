import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useBandPath, BANDS_PATH } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';
import { setActiveBandAndGetMembers } from 'redux/userSlice.js';
import { showDeleteBandModal } from './DeleteBandModal/DeleteBandModalSlice.js';
import { showEditBandModal } from './EditBandModal/EditBandModalSlice.js';
import { fetchMembers } from './membersSlice.js';
import { showNewBandModal } from './NewBandModal/newBandModalSlice.js';

const FETCH = 'bands/fetchUserBands';
export const fetchUserBands = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const headers = await authHeader();
	const response = await axios.get(BANDS_PATH, headers);

	thunkAPI.dispatch(bandSlice.actions.setUserBands(response.data));
});

const NEW = 'bands/new';
export const createNewBand = createAsyncThunk(NEW, async (form, thunkAPI) => {
	const { dispatch } = thunkAPI;
	const headers = await authHeader();
	await axios.post(BANDS_PATH + '/new', form, headers);
	await dispatch(fetchUserBands());
	await dispatch(setActiveBandAndGetMembers(form.name));
	dispatch(showNewBandModal(false));
});

const EDIT = 'bands/edit';
export const editBand = createAsyncThunk(EDIT, async (form, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { activeMember } = getState().user;

	const config = await authHeader();
	const response = await axios.put(useBandPath(activeMember.bandPath), form, config);
	dispatch(setUserBands(response.data));
	await dispatch(fetchMembers());

	dispatch(showEditBandModal(false));
});

const DELETE = 'bands/delete';
export const deleteActiveBand = createAsyncThunk(DELETE, async (_, thunkAPI) => {
	const { dispatch, getState } = thunkAPI;
	const { user } = getState();

	const config = await authHeader();
	const response = await axios.delete(useBandPath(user.activeMember.bandPath), config);
	dispatch(setUserBands(response.data));

	const { bands } = getState();
	await dispatch(setActiveBandAndGetMembers(bands[0].bandName));

	dispatch(showEditBandModal(false));
	dispatch(showDeleteBandModal(false));
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

export const { clearUserBands, setUserBands } = bandSlice.actions;
export const bands = bandSlice.reducer;
