import { configureStore } from '@reduxjs/toolkit';
import user from 'redux/userSlice.js';
import activeBand from 'redux/bandSlice.js';
import userBands from 'redux/userBandSlice.js';
import activeTour from 'redux/tourSlice.js';
import modal from 'redux/modalSlice.js';
import selectedDateIndex from 'redux/dateSlice.js';

export const store = configureStore({
	reducer: { user, activeBand, userBands, activeTour, selectedDateIndex, modal },
});
