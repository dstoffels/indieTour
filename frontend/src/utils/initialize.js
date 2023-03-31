import { fetchActiveBandThunk } from 'redux/bandSlice.js';
import { fetchActiveTourThunk } from 'redux/tourSlice.js';
import { fetchUserBandsThunk } from 'redux/userBandSlice.js';

const user = '';

export const initialize = dispatch => {
	// const user = getUserObjectFromToken();
	// dispatch(setUser(user));
	if (user) {
		dispatch(fetchActiveBandThunk());
		dispatch(fetchUserBandsThunk());
	}
};
