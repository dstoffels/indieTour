import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	notes: '',
	startDate: '',
	endDate: '',
	dates: [],
};

export const tourFormSlice = createSlice({
	name: 'tourForm',
	initialState,
	reducers: {
		setTourName: (state, action) => {
			state.name = action.payload;
		},
		setTourNotes: (state, action) => {
			state.notes = action.payload;
		},
		setTourDates: (state, action) => {
			state.dates = action.payload;
		},
		setTourDate: (state, action) => {
			const { i, data } = action.payload;
			state.dates[i] = data;
		},
	},
});
export const { setTourName, setTourNotes, setTourDates, setTourDate } = tourFormSlice.actions;
export const tourForm = tourFormSlice.reducer;
