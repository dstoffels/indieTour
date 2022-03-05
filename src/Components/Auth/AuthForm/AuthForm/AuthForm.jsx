import { Button, Divider, MenuItem, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Login/LoginForm.jsx';
import SignUpForm from '../SignUp/SignUpForm.jsx';
import LoginBtn from '../Login/LoginBtn.jsx';
import SignUpBtn from '../SignUp/SignUpBtn.jsx';

const AuthForm = props => {
	const [signUp, setSignUp] = useState(false);

	const handleSignUp = e => {
		e.stopPropagation();
		setSignUp(!signUp);
	};

	return (
		<MenuItem>
			<Paper className='p-2 w-100'>
				<h5 className='text-black'>
					{signUp ? 'Sign up for a new account' : 'Log in to your account'}
				</h5>
				<Divider />
				{signUp ? <SignUpForm /> : <LoginForm />}
				<Divider />
				<Stack direction='row' spacing={2} marginTop={2} flex={1} justifyContent='space-between	'>
					<Button onClick={handleSignUp} size='small'>
						{signUp ? 'SIGN IN' : 'SIGN UP'}
					</Button>
					{signUp ? <SignUpBtn /> : <LoginBtn />}
				</Stack>
			</Paper>
		</MenuItem>
	);
};

export default AuthForm;
