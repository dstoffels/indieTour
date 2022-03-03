import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN, WAITING_ROOM } from '../../../constants/routes.js';
import { auth } from '../../../firebase/firebase.js';
import { setUser } from '../SignIn/userSlice.js';

const Authenticate = ({ children }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const verifyCurrentUser = () => {
		if (!auth.currentUser) {
			navigate(SIGN_IN);
			return null;
		}

		if (!auth.currentUser.emailVerified) {
			navigate(WAITING_ROOM);
			return null;
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			user && dispatch(setUser(user.toJSON()));
			!user && dispatch(setUser(null));
			verifyCurrentUser();
		});

		return () => unsubscribe();
	}, []);

	return children;
};

export default Authenticate;
