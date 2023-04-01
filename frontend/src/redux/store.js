import { configureStore } from '@reduxjs/toolkit';
import activeBand from 'redux/bandSlice.js';
import activeTour from 'redux/tourSlice.js';
import modal from 'redux/modalSlice.js';
import activeDate from 'redux/dateSlice.js';

export const store = configureStore({
	reducer: { activeBand, activeTour, activeDate, modal },
});
