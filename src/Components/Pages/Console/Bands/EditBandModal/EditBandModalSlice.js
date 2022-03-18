import { createSlice } from '@reduxjs/toolkit';

export const editBandModalSlice = createSlice({
	name: 'editBandModal',
	initialState: false,
	reducers: {
		showEditBandModal: (state, action) => action.payload,
	},
});

export const { showEditBandModal } = editBandModalSlice.actions;
export const editBandModal = editBandModalSlice.reducer;
