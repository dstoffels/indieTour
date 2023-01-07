import { fetchActiveBand } from 'redux/bandSlice.js';
import { fetchUserBands } from 'redux/userBandSlice.js';
import { getUserObjectFromToken, setUser } from 'redux/userSlice.js';

export const initialize = dispatch => {
	const user = getUserObjectFromToken();
	dispatch(setUser(user));
	if (user) {
		dispatch(fetchActiveBand());
		dispatch(fetchUserBands());
	}
};
