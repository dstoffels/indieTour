import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { fetchActiveBandThunk } from './bandSlice.js';
import { getConfigObj } from './userSlice.js';

const activeTour = createSlice({
	name: 'activeTour',
	initialState: null,
	reducers: {
		setTour: (state, action) => (state = action.payload),
	},
});

export default activeTour.reducer;

export const { setTour } = activeTour.actions;

export const fetchActiveTourThunk = createAsyncThunk(
	'activeTour/GET',
	async (_, { dispatch, getState }) => {
		try {
			const config = getConfigObj();
			const { activeBand } = getState();
			const response = activeBand
				? await axios.get(endpoints.activeTour(activeBand.id), config)
				: null;
			dispatch(setTour(response.data));
		} catch (error) {
			dispatch(setTour(null));
			console.error(error.response.data);
		}
	},
);

export const setActiveTourThunk = createAsyncThunk(
	'activeTour/SET',
	async (tourId, { dispatch, getState }) => {
		try {
			const { activeBand } = getState();

			tourId = tourId ? tourId : activeBand.tours[0].id;

			const config = getConfigObj();
			const response = await axios.post(endpoints.activeTour(activeBand.id, tourId), {}, config);
			dispatch(setTour(response.data));
		} catch (error) {
			dispatch(setTour(null));
			console.error(error.response.data);
		}
	},
);

export const createTourThunk = createAsyncThunk(
	'tour/CREATE',
	async (formData, { dispatch, getState }) => {
		try {
			const { activeBand } = getState();
			const config = getConfigObj();
			const response = await axios.post(endpoints.tours(activeBand.id), formData, config);
			dispatch(setActiveTourThunk(response.data.id));
		} catch (error) {
			console.error(error.response.data);
		}
		dispatch(fetchActiveBandThunk());
	},
);

export const editTourThunk = createAsyncThunk(
	'tour/UPDATE',
	async (formData, { dispatch, getState }) => {
		try {
			const { activeBand } = getState();
			const config = getConfigObj();
			const response = await axios.put(
				endpoints.tours(activeBand.id, formData.id),
				formData,
				config,
			);
			// dispatch(setActiveTourThunk(response.data.id));
		} catch (error) {
			console.error(error.response.data);
		}
		dispatch(fetchActiveBandThunk());
		dispatch(fetchActiveTourThunk());
	},
);

export const deleteTourThunk = createAsyncThunk(
	'tour/DELETE',
	async (tourId, { dispatch, getState }) => {
		try {
			const { activeBand } = getState();
			const config = getConfigObj();
			const response = await axios.delete(endpoints.tours(activeBand.id, tourId), config);
			dispatch(setActiveTourThunk(null));
			dispatch(fetchActiveBandThunk());
		} catch (error) {
			console.error(error.response.data);
		}
	},
);
