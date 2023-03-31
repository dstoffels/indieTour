import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { initialize } from 'utils/initialize.js';
import jwtDecode from 'jwt-decode';
import endpoints from 'utils/endpoints.js';

export const getConfigObj = () => {
	return { headers: { Authorization: `Bearer ${getAccessToken()}` } };
};

const getAccessToken = () => {
	const tokenPair = JSON.parse(localStorage.getItem('token'));
	return tokenPair ? tokenPair.access : null;
};

const getRefreshToken = () => JSON.parse(localStorage.getItem('token').refresh);

const setTokenPair = jwt => localStorage.setItem('token', JSON.stringify(jwt));

const setAccessToken = accessToken =>
	setTokenPair({ refresh: getRefreshToken(), access: accessToken });

export const getUserObjectFromToken = () => {
	const userToken = getAccessToken();
	if (!userToken) return null;
	const { username, email, user_id, is_active } = jwtDecode(userToken);
	return {
		id: user_id,
		email,
		username,
		is_active,
	};
};

const user = createSlice({
	name: 'user',
	initialState: null,
	reducers: {
		setUser: (state, action) => (state = action.payload),
	},
});

export default user.reducer;

export const { setUser } = user.actions;

export const loginUser = createAsyncThunk('user/login', async (credentials, { dispatch }) => {
	try {
		const response = await axios.post(endpoints.LOGIN, credentials);
		setTokenPair(response.data);
		initialize(dispatch);
	} catch (error) {
		console.error(error.response.data);
	}
});

export const logoutUser = createAsyncThunk('user/logout', (_, { dispatch }) => {
	localStorage.removeItem('token');
	dispatch(setUser(null));
});

export const editUser = createAsyncThunk('user/edit', async (userInfo, { dispatch }) => {
	const body = { ...userInfo, refresh: getRefreshToken() };
	const response = await axios.post(endpoints.EDIT_USER, body);
	setAccessToken(response.data.access);
	dispatch(setUser(getUserObjectFromToken()));
});

export const registerUser = createAsyncThunk('user/register', async (userInfo, { dispatch }) => {
	try {
		const response = await axios.post(endpoints.REGISTER_USER, userInfo);
		if (response.status === 201) {
			const { email, password } = userInfo;
			dispatch(loginUser({ email, password }));
		}
	} catch (error) {
		console.error(error.response.data);
	}
});
