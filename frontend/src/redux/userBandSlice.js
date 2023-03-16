import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from './userSlice.js';

const userBands = createSlice({
	name: 'userBands',
	initialState: null,
	reducers: {
		setUserBands: (state, action) => (state = action.payload),
	},
});

export default userBands.reducer;
const { setUserBands } = userBands.actions;

// THUNKS
export const fetchUserBandsThunk = createAsyncThunk('userBands/GET', async (_, { dispatch }) => {
	try {
		const config = getConfigObj();
		const response = await axios.get(endpoints.bands(), config);
		dispatch(setUserBands(response.data));
	} catch (error) {
		console.error(error.response.data);
	}
});
