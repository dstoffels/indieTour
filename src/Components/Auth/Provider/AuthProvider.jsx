import { auth } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/userSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			user && dispatch(setUser(user.toJSON()));
			!user && dispatch(setUser(null));
		});
		return () => unsubscribe();
	}, [dispatch]);

	return children;
};

export default AuthProvider;
