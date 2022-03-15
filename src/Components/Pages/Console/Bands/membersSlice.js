import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { membersPath } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';

const FETCH = 'members/fetchMembers';
export const fetchMembers = createAsyncThunk(FETCH, async (_, thunkAPI) => {
	const { activeMember } = thunkAPI.getState().user;
	const config = await authHeader();
	const response = await axios.get(membersPath(activeMember.bandPath), config);
	thunkAPI.dispatch(membersSlice.actions.setMembers(response.data));
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
