import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setPrevPage: (state, action) => (state = action.payload),
	},
});

export const { setPrevPage } = navSlice.actions;
export const prevPage = navSlice.reducer;
