import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import endpoints from 'utils/endpoints.js';

export const getToken = () => JSON.parse(localStorage.getItem('token'));

export const setToken = accessToken => localStorage.setItem('token', JSON.stringify(accessToken));

const generateUserObjectFromToken = () => {
	const userToken = getToken();
	if (!userToken) return null;
	const { username, email, user_id, active_band_id, active_tour_id } = jwtDecode(userToken);
	return {
		id: user_id,
		email,
		username,
		activeBandId: active_band_id,
		activeTourId: active_tour_id,
	};
};

const initialState = generateUserObjectFromToken();

const user = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => (state = action.payload),
	},
});

export default user.reducer;

const { setUser } = user.actions;

export const loginUser = createAsyncThunk(
	'user/login',
	async (credentials, { dispatch, getState }) => {
		try {
			const response = await axios.post(endpoints.LOGIN, credentials);
			setToken(response.data.access);
			dispatch(setUser(generateUserObjectFromToken()));
		} catch (error) {
			console.error(error.response.data);
		}
	},
);

export const registerUser = createAsyncThunk(
	'user/register',
	async (userInfo, { dispatch, getState }) => {
		try {
			const response = await axios.post(endpoints.REGISTER, userInfo);
			if (response.status == 201) {
				const { email, password } = userInfo;
				dispatch(loginUser({ email, password }));
			}
		} catch {}
	},
);

export const logoutUser = createAsyncThunk('user/logout', (_, { dispatch }) => {
	localStorage.removeItem('token');
	dispatch(setUser(null));
});
