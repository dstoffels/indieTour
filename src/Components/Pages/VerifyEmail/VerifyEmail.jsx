import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from 'constants/routes.js';
import { auth } from 'fb/firebase.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';

const VerifyEmail = props => {
	const navigate = useNavigate();
	useEffect(() => {
		const checkForVerify = setInterval(() => {
			auth.currentUser.reload();
			auth.currentUser?.emailVerified && navigate(HOME);
		}, 2000);
		return () => clearInterval(checkForVerify);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return <h2>Awaiting email verification</h2>;
};

export default withAuthentication(VerifyEmail);
