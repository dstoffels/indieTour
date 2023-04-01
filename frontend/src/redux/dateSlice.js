import { createSlice } from '@reduxjs/toolkit';

const activeDate = createSlice({
	name: 'activeDate',
	initialState: null,
	reducers: {
		storeActiveDate: (state, action) => (state = action.payload),
	},
});

export default activeDate.reducer;

export const { storeActiveDate } = activeDate.actions;
