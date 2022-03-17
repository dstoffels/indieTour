import { createSlice } from '@reduxjs/toolkit';

export const deleteModalSlice = createSlice({
	name: 'deleteModal',
	initialState: null,
	reducers: {
		showDeleteModal: (state, action) => action.payload,
		closeDeleteModal: () => '',
	},
});

export const { showDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export const deleteModal = deleteModalSlice.reducer;
