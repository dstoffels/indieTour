import { createSlice } from '@reduxjs/toolkit';

const selectedDateIndex = createSlice({
	name: 'selectedDateIndex',
	initialState: 0,
	reducers: {
		setSelectedDateIndex: (state, action) => (state = action.payload),
	},
});

export default selectedDateIndex.reducer;

export const { setSelectedDateIndex } = selectedDateIndex.actions;
