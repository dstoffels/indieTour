import { createSlice } from '@reduxjs/toolkit';

export const mainModalSlice = createSlice({
	name: 'mainModal',
	initialState: false,
	reducers: {
		showModal: (state, action) => action.payload,
	},
});

export const { showModal } = mainModalSlice.actions;
export const mainModal = mainModalSlice.reducer;
