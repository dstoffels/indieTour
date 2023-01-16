import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	open: false,
	key: null,
};

const modal = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setModalKey: (state, action) => {
			if (state.key != action.payload) state.key = action.payload;
			state.open = true;
		},
		closeModal: state => {
			state.open = false;
		},
	},
});

export default modal.reducer;

export const { closeModal, setModalKey } = modal.actions;
