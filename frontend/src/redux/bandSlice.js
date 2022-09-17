import axios from 'axios';
import endpoints from 'utils/endpoints.js';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

const activeBand = createSlice({
	name: 'band',
	initialState: null,
	reducers: {
		setBand: (state, action) => (state = action.payload),
	},
});

export default activeBand.reducer;

export const fetchActiveBand = createAsyncThunk(
	'user/active/band',
	async (_, { dispatch, getState }) => {
		const { user } = getState(state => state);

		const response = axios.post(endpoints.bands(user.active_band_id), {});
	},
);
