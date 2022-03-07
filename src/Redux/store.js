import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { nav } from '../Components/Common/BottomNav/navSlice.js';
import { bands } from '../Components/Pages/Console/Bands/BandSelector/bandsSlice.js';

export const store = configureStore({
	reducer: {
		user,
		nav,
		bands,
	},
});
