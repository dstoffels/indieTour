import { configureStore } from '@reduxjs/toolkit';
import { user } from '../Components/Auth/SignIn/userSlice.js';

export const store = configureStore({
	reducer: {
		user,
	},
});
