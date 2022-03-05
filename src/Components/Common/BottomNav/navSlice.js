import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentPage: '', prevPage: '' };

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setPage: (state, action) => {
			state.currentPage = action.payload;
		},
		setPrevPage: (state, action) => {
			state.prevPage = action.payload;
		},
	},
});

export const { setPage, setPrevPage } = navSlice.actions;
export const nav = navSlice.reducer;
