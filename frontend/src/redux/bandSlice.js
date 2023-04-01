import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchActiveTourThunk, setActiveTourThunk } from './tourSlice.js';

const config = '';

const activeBand = createSlice({
	name: 'activeBand',
	initialState: null,
	reducers: {
		setBand: (state, action) => (state = action.payload),
	},
});

export default activeBand.reducer;

// THUNKS
export const { setBand } = activeBand.actions;

export const fetchActiveBandThunk = createAsyncThunk('activeBand/GET', async (_, { dispatch }) => {
	try {
		// const config = getConfigObj();
		const response = await axios.get(endpoints.activeBand(), config);
		dispatch(setBand(response.data));
		dispatch(fetchActiveTourThunk(response.data.id));
	} catch (error) {
		console.error(error.response.data);
	}
});

export const setActiveBandThunk = createAsyncThunk(
	'activeBand/SET',
	async (bandId, { dispatch }) => {
		try {
			// const config = getConfigObj();
			const response = await axios.post(endpoints.activeBand(bandId), {}, config);
			dispatch(setBand(response.data));
			dispatch(setActiveTourThunk());
		} catch (error) {
			console.error(error.response.data);
		}
	},
);

export const createNewBandThunk = createAsyncThunk(
	'band/CREATE',
	async (bandData, { dispatch }) => {
		try {
			// const config = getConfigObj();
			const response = await axios.post(endpoints.bands(), bandData, config);
			// dispatch(fetchUserBandsThunk());
			dispatch(setActiveBandThunk(response.data.id));
		} catch (error) {
			console.error(error.response.data);
		}
	},
);

// export const editBandThunk = createAsyncThunk(
// 	'band/UPDATE',
// 	async (bandData, { dispatch, getState }) => {
// 		try {
// 			// const config = getConfigObj();
// 			const { activeBand } = getState();

// 			const response = await axios.put(endpoints.bands(activeBand.id), bandData, config);
// 			dispatch(fetchUserBandsThunk());
// 			dispatch(fetchActiveBandThunk());
// 		} catch (error) {
// 			console.error(error.response.data);
// 		}
// 	},
// );

// export const deleteBandThunk = createAsyncThunk('band/DELETE', async (bandId, { dispatch }) => {
// 	try {
// 		// const config = getConfigObj();

// 		const response = await axios.delete(endpoints.bands(bandId), config);
// 		dispatch(fetchUserBandsThunk());
// 		dispatch(fetchActiveBandThunk());
// 	} catch (error) {
// 		console.error(error.response.data);
// 	}
// });
