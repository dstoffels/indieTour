import { createSlice } from '@reduxjs/toolkit';

export const deleteModalSlice = createSlice({
	name: 'deleteModal',
	initialState: false,
	reducers: {
		showDeleteModal: (state, action) => action.payload,
	},
});

export const { showDeleteModal } = deleteModalSlice.actions;
export const deleteModal = deleteModalSlice.reducer;
