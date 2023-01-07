import { configureStore } from '@reduxjs/toolkit';
import user from 'redux/userSlice.js';
import activeBand from 'redux/bandSlice.js';
import userBands from 'redux/userBandSlice.js';

export const store = configureStore({
	reducer: { user, activeBand, userBands },
});
