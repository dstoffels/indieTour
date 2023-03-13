import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from './userSlice.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActiveTourThunk, setActiveTourThunk } from './tourSlice.js';

const activeBand = createSlice({
	name: 'activeBand',
	initialState: null,
	reducers: {
		setBand: (state, action) => (state = action.payload),
	},
});

export default activeBand.reducer;

// THUNKS
const { setBand } = activeBand.actions;

export const fetchActiveBand = createAsyncThunk('activeBand/GET', async (_, { dispatch }) => {
	try {
		const config = getConfigObj();
		const response = await axios.get(endpoints.activeBand(), config);
		dispatch(setBand(response.data));
		dispatch(fetchActiveTourThunk(response.data.id));
	} catch (error) {
		console.error(error.response.data);
	}
});

export const setActiveBand = createAsyncThunk('activeBand/SET', async (bandId, { dispatch }) => {
	try {
		const config = getConfigObj();
		const response = await axios.post(endpoints.activeBand(bandId), {}, config);
		dispatch(setBand(response.data));
		dispatch(setActiveTourThunk());
	} catch (error) {
		console.error(error.response.data);
	}
});
