import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
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

export const fetchActiveTour = createAsyncThunk('activeTour/GET', async (bandId, { dispatch }) => {
	try {
		const config = getConfigObj();
		const response = await axios.get(endpoints.activeTour(bandId), config);
		dispatch(setTour(response.data));
	} catch (error) {
		dispatch(setTour(null));
		console.error(error.response.data);
	}
});

export const setActiveTour = createAsyncThunk(
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
