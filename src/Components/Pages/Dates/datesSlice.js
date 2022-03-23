import { createSlice } from '@reduxjs/toolkit';

const initialState = { showPastDates: false, activeDate: null, editMode: false };

export const datesSlice = createSlice({
	name: 'dateControls',
	initialState,
	reducers: {
		setPastDates: (state, action) => {
			state.showPastDates = action.payload;
		},
		setActiveDate: (state, action) => {
			state.activeDate = action.payload;
		},

		setEditMode: (state, action) => {
			state.editMode = action.payload;
		},

		updateActiveDate: (state, action) => {
			state.activeDate = action.payload;
		},
	},
});

export const { setPastDates, setActiveDate, setEditMode, updateActiveDate } = datesSlice.actions;
export const dateControls = datesSlice.reducer;
