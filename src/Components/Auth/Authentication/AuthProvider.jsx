import { clearUserBands } from 'Components/Pages/Console/Bands/bandsSlice.js';
import { clearMembers } from 'Components/Pages/Console/Bands/membersSlice.js';
import { auth } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser, fetchUser } from 'redux/userSlice.js';
import { clearToken, fetchToken } from './authSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				await dispatch(fetchToken());
				await dispatch(fetchUser());
			} else {
				dispatch(clearToken());
				dispatch(clearUserBands());
				dispatch(clearMembers());
				dispatch(clearUser());
			}
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
