import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
import { auth, authHeader } from 'fb/firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< HEAD
import { auth } from '../../../firebase/firebase.js';
import { setUser } from '../../../Redux/userSlice.js';
=======
import { setUser } from 'redux/userSlice.js';
>>>>>>> console

const AuthProvider = ({ children }) => {
	const dispatch = useDispatch();

	useEffect(() => {
<<<<<<< Updated upstream
=======
<<<<<<< Updated upstream
		const unsubscribe = onAuthStateChanged(auth, user => {
			user && dispatch(setUser(user.toJSON()));
			!user && dispatch(setUser(null));
=======
>>>>>>> Stashed changes
		const unsubscribe = onAuthStateChanged(auth, async user => {
			if (user) {
				const headers = await authHeader();
				const response = await axios.get(USER_PATH, headers);
<<<<<<< Updated upstream
=======
				console.log(response.data);
>>>>>>> Stashed changes
				dispatch(setUser(response.data));
			} else {
				dispatch(setUser(null));
			}
<<<<<<< Updated upstream
=======
>>>>>>> Stashed changes
>>>>>>> Stashed changes
		});
		return () => unsubscribe();
	}, []);

	return children;
};

export default AuthProvider;
