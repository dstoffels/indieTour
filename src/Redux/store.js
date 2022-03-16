import { configureStore } from '@reduxjs/toolkit';
import { user } from './userSlice.js';
import { bands } from '../Components/Pages/Console/Bands/bandsSlice.js';
import { newBandModal } from 'Components/Pages/Console/Bands/NewBandModal/newBandModalSlice.js';
import { members } from 'Components/Pages/Console/Bands/membersSlice.js';
import { editBandModal } from 'Components/Pages/Console/Bands/EditBandModal/EditBandModalSlice.js';
import { deleteBandModal } from 'Components/Pages/Console/Bands/DeleteBandModal/DeleteBandModalSlice.js';
import { tours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { token } from 'Components/Auth/Authentication/authSlice.js';

export const store = configureStore({
	reducer: {
		token,
		user,
		bands,
		tours,
		members,
		newBandModal,
		editBandModal,
		deleteBandModal,
	},
});
