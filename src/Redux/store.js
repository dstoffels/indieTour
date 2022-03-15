import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { bands } from '../Components/Pages/Console/Bands/bandsSlice.js';
import { newBandModal } from 'Components/Pages/Console/Bands/NewBandModal/newBandModalSlice.js';
import { members } from 'Components/Pages/Console/Bands/membersSlice.js';
import { loading } from './loading.js';
import { editBandModal } from 'Components/Pages/Console/Bands/EditBandModal/EditBandModalSlice.js';

export const store = configureStore({
	reducer: {
		// loading,
		user,
		bands,
		members,
		newBandModal,
		editBandModal,
	},
});
