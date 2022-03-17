import { clearUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { clearMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { clearTours } from 'Components/Pages/Console/Tours/toursSlice.js';
import { auth } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, fetchUser } from 'redux/userSlice.js';
import { clearToken, setToken } from './authSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const token = { headers: { auth: user.accessToken } };
				await dispatch(setToken(token));
				await dispatch(fetchUser());
			} else {
				dispatch(clearUser());
				dispatch(clearToken());
				dispatch(clearMembers());
				dispatch(clearUserBands());
				dispatch(clearTours());
			}
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
