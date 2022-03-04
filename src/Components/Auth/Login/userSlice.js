import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
		clearUser: state => initialState,
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const user = userSlice.reducer;
