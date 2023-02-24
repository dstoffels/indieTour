import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	open: false,
	key: null,
	formData: null,
};

const modal = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setModalKey: (state, action) => {
			if (state.key != action.payload) state.key = action.payload;
			state.open = true;
		},
		updateFormData: (state, action) => {
			state.formData = action.payload;
		},
		// deprecate setTourDate
		setTourDate: (state, action) => {
			const { i, tourDate } = action.payload;
			state.formData.dates[i] = tourDate;
		},
		openModal: state => {
			state.open = true;
		},
		closeModal: state => {
			state.open = false;
		},
	},
});

export default modal.reducer;

export const { openModal, closeModal, setModalKey, updateFormData, setTourDate } = modal.actions;
