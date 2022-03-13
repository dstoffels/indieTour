import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
import { auth, authHeader } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const headers = await authHeader();
				const response = await axios.get(USER_PATH, headers);
				dispatch(setUser(response.data));
			} else {
				dispatch(setUser(null));
			}
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
