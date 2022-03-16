import { createSlice } from '@reduxjs/toolkit';

export const deleteBandModalSlice = createSlice({
	name: 'deleteBandModal',
	initialState: false,
	reducers: {
		showDeleteBandModal: (state, action) => action.payload,
	},
});

export const { showDeleteBandModal } = deleteBandModalSlice.actions;
export const deleteBandModal = deleteBandModalSlice.reducer;
