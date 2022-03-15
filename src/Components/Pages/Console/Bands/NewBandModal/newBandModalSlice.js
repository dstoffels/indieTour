import { createSlice } from '@reduxjs/toolkit';

export const newBandModalSlice = createSlice({
	name: 'newBandModal',
	initialState: false,
	reducers: {
		showNewBandModal: (state, action) => (state = action.payload),
	},
});

export const { showNewBandModal } = newBandModalSlice.actions;
export const newBandModal = newBandModalSlice.reducer;
