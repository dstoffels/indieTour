import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { membersPath } from 'utils/restPaths.js';

const FETCH = 'members/fetchMembers';
export const fetchMembers = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { user, token } = thunkAPI.getState();
	if (token) {
		const response = await axios.get(membersPath(user.activeMember.bandPath), token);
		thunkAPI.dispatch(membersSlice.actions.setMembers(response.data));
	}
});

const initialState = [];
export const membersSlice = createSlice({
	name: 'members',
	initialState,
	reducers: {
		setMembers: (state, action) => (state = action.payload),
		clearMembers: state => (state = initialState),
	},
});

export const { clearMembers } = membersSlice.actions;
export const members = membersSlice.reducer;
