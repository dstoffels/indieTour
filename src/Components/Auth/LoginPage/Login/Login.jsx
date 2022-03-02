import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { REST_LOGIN } from '../../../../constants/restPaths.js';
import { HOME, SIGNUP } from '../../../../constants/routes.js';
import AuthForm from '../../AuthForm/AuthForm.jsx';

const Login = props => {
	// HOOKS
	const navigate = useNavigate();

	const handleLogin = async (form, handleError) => {
		try {
			const res = await axios.post(REST_LOGIN, form);
			localStorage.setItem('token', res.data.token.accessToken);
			console.log(res.data);
			navigate(HOME);
		} catch {
			handleError({ ...form, error: 'email/password incorrect' });
		}
	};

	const formProps = {
		title: 'Log in to your account',
		fields: ['Email', 'Password'],
		onSubmit: handleLogin,
		submitBtn: 'SIGN IN',
		secondaryBtn: 'SIGN UP',
		onSecondary: () => navigate(SIGNUP),
		id: 'login-form',
	};

	return <AuthForm {...formProps} />;
};

export default Login;
