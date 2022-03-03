import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes.js';
import { auth } from '../../../firebase/firebase.js';
import withAuthentication from '../Authentication/withAuthentication.jsx';

const VerifyEmail = props => {
	const navigate = useNavigate();
	useEffect(() => {
		const checkForVerify = setInterval(() => {
			auth.currentUser.reload();
			auth.currentUser?.emailVerified && navigate(HOME);
		}, 2000);
		return () => clearInterval(checkForVerify);
	}, []);
	return <h2>Awaiting email verification</h2>;
};

export default withAuthentication(VerifyEmail);
