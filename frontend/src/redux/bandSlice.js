import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from './userSlice.js';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchActiveBand = createAsyncThunk(
	'activeBand/GET',
	async (_, { dispatch, getState }) => {
		const { user } = getState(state => state);
		try {
			const config = getConfigObj();
			const response = await axios.get(endpoints.bands(user.activeBandId), config);
			dispatch(setBand(response.data));
		} catch (error) {
			console.error(error.response.data);
		}
	},
);
