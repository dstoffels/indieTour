import { MenuItem } from '@mui/material';
import React from 'react';
import LoginForm from '../Login/LoginForm.jsx';

const AuthForm = props => {
	return (
		<MenuItem>
			<LoginForm />
		</MenuItem>
	);
};

export default AuthForm;
