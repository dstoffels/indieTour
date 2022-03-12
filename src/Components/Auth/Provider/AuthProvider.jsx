import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
import { auth } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const { email, displayName, emailVerified } = user;
				const updatedUser = await axios.put(
					USER_PATH,
					{ email, displayName, emailVerified },
					{ headers: { auth: await user.getIdToken() } },
				);
				dispatch(setUser(updatedUser.data));
			} else {
				dispatch(setUser(null));
			}
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
