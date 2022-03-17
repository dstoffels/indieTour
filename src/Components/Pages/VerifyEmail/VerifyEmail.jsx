import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSOLE, HOME } from 'constants/routes.js';
import { auth } from 'fb/firebase.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import axios from 'axios';
import { USER_PATH } from 'utils/restPaths.js';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'redux/userSlice.js';

const VerifyEmail = props => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { token } = useSelector(state => state);

	useEffect(() => {
		const checkForVerify = setInterval(async () => {
			const { currentUser } = auth;
			currentUser.reload();
			const { emailVerified } = currentUser;
			const user = await axios.put(USER_PATH, { emailVerified }, token);
			dispatch(setUser(user.data));
			user.emailVerified && navigate(CONSOLE);
		}, 2000);
		return () => clearInterval(checkForVerify);
	}, []);
	return <h2>Awaiting email verification</h2>;
};
// TODO: make a card to display awaiting email verification and resend button.

export default withAuthentication(VerifyEmail);
