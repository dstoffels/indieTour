import { Button, Divider, MenuItem, Paper, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../../../constants/routes.js';
import LoginForm from '../Login/LoginForm.jsx';
import SignUpBtn from '../SignUp/SignUpBtn.jsx';
import SignUpForm from '../SignUp/SignUpForm.jsx';
import LoginBtn from './LoginBtn/LoginBtn.jsx';

const AuthForm = props => {
	const navigate = useNavigate();
	const [signUp, setSignUp] = useState(false);

	const handleSignUp = e => {
		e.stopPropagation();
		setSignUp(!signUp);
	};
	const stopProp = e => e.stopPropagation();

	return (
		<MenuItem onClick={stopProp} onKeyDown={stopProp}>
			<Paper className='p-2 w-100'>
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
