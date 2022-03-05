import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { nav } from '../Components/Common/BottomNav/navSlice.js';

export const store = configureStore({
	reducer: {
		user,
		nav,
	},
});
