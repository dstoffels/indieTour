import { fetchActiveBandThunk } from 'redux/bandSlice.js';

const user = '';

export const initialize = dispatch => {
	// const user = getUserObjectFromToken();
	// dispatch(setUser(user));
	if (user) {
		dispatch(fetchActiveBandThunk());
		// dispatch(fetchUserBandsThunk());
	}
};
