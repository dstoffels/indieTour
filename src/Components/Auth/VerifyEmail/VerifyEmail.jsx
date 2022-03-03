import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes.js';
import { auth } from '../../../firebase/firebase.js';

const VerifyEmail = props => {
	const navigate = useNavigate();
	useEffect(() => {
		auth.currentUser?.emailVerified && navigate(HOME);
	}, []);

	return (
		<a href='https://indietour-9bf7b.firebaseapp.com/__/auth/action?mode=action&oobCode=code'>
			verify
		</a>
	);
};

export default VerifyEmail;
