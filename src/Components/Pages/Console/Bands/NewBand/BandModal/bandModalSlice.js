import { createSlice } from '@reduxjs/toolkit';

export const bandModalSlice = createSlice({
	name: 'bandModal',
	initialState: false,
	reducers: {
		showBandModal: (state, action) => (state = action.payload),
	},
});

export const { showBandModal } = bandModalSlice.actions;
export const bandModal = bandModalSlice.reducer;
