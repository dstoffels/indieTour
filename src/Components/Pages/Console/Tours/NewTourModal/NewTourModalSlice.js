import { createSlice } from '@reduxjs/toolkit';

export const newTourModalSlice = createSlice({
	name: 'tourModal',
	initialState: false,
	reducers: {
		showTourModal: (state, action) => action.payload,
	},
});

export const { showTourModal } = newTourModalSlice.actions;
export const newTourModal = newTourModalSlice.reducer;
