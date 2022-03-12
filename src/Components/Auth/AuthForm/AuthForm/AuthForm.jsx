import { Button, Divider, MenuItem, Paper, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import SignUpForm from '../SignUp/SignUpForm.jsx';
import LoginBtn from '../Login/LoginBtn.jsx';
import SignUpBtn from '../SignUp/SignUpBtn.jsx';
import LoginForm from '../Login/LoginForm.jsx';

const AuthForm = props => {
	const [signUp, setSignUp] = useState(false);

	const handleSignUp = e => {
		e.stopPropagation();
		setSignUp(!signUp);
	};

	return (
		<MenuItem>
			<div className='p-2 w-100 bg-dark-grey'>
				<h5>{signUp ? 'Sign up for a new account' : 'Log in to your account'}</h5>
				<Divider />
				{signUp ? <SignUpForm /> : <LoginForm />}
				<Divider />
				<Stack direction='row' spacing={2} marginTop={2} flex={1} justifyContent='space-between	'>
					<Button onClick={handleSignUp} size='small'>
						{signUp ? 'LOGIN' : 'CREATE NEW ACCOUNT'}
					</Button>
					{signUp ? <SignUpBtn /> : <LoginBtn />}
				</Stack>
			</div>
		</MenuItem>
	);
};

export default AuthForm;
