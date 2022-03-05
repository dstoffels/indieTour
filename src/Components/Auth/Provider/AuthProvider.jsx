import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase/firebase.js';
import { setUser } from '../../../Redux/userSlice.js';

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			user && dispatch(setUser(user.toJSON()));
			!user && dispatch(setUser(null));
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
