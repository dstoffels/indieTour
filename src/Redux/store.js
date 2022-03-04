import { configureStore } from '@reduxjs/toolkit';
import { user } from '../Components/Auth/Login/userSlice.js';
import { prevPage } from '../Components/Pages/navSlice.js';

export const store = configureStore({
	reducer: {
		user,
		prevPage,
	},
});
