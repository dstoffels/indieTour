import { configureStore } from '@reduxjs/toolkit';
import { user } from '../Components/Auth/Login/userSlice.js';

export const store = configureStore({
	reducer: {
		user,
	},
});
