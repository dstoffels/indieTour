import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { bands } from '../Components/Pages/Console/Bands/bandsSlice.js';
import { bandModal } from 'Components/Pages/Console/Bands/NewBand/BandModal/bandModalSlice.js';
import { members } from 'Components/Pages/Console/Bands/membersSlice.js';
import { loading } from './loading.js';

export const store = configureStore({
	reducer: {
		// loading,
		user,
		bands,
		members,
		bandModal,
	},
});
