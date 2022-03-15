import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from 'constants/routes.js';
import { auth, authHeader } from 'fb/firebase.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import axios from 'axios';
import { USER_PATH } from 'constants/restPaths.js';
import { useDispatch } from 'react-redux';

const VerifyEmail = props => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	useEffect(() => {
		const checkForVerify = setInterval(async () => {
			const header = await authHeader();
			// const { emailVerified } = auth.currentUser;
			// const user = await axios.put(USER_PATH, { emailVerified }, header);
			// dispatch(setUser(user.data));
			auth.currentUser.emailVerified && navigate(HOME);
		}, 2000);
		return () => clearInterval(checkForVerify);
	}, []);
	return <h2>Awaiting email verification</h2>;
};
// TODO: make a card to display awaiting email verification and resend button.

export default withAuthentication(VerifyEmail);
