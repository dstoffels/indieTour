import { Button, Paper, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGNUP } from '../../../constants/routes.js';
import { emailLogin } from '../../../firebase/firebase.js';
import useForm from '../../../hooks/useForm.js';
import EmailField from '../FormFields/EmailField/EmailField.jsx';
import PasswordField from '../FormFields/PasswordField/PasswordField.jsx';

const LoginForm = props => {
	// HOOKS
	const navigate = useNavigate();

	const initialState = { email: '', password: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, login);
	const formId = 'sign-in-form';

	// STATE
	const [error, setError] = useState('');

	async function login() {
		try {
			await emailLogin(form);

			// navigate(DASHBOARD);
		} catch (e) {
			setError(e.code);
		}
	}

	const priBtn = (
		<Button form={formId} type='submit' size='large' variant='contained'>
			SIGN IN
		</Button>
	);
	const secBtn = (
		<Button
			onClick={() => {
				navigate(SIGNUP);
			}}
			size='small'>
			SIGN UP
		</Button>
	);

	const stopProp = e => e.stopPropagation();

	return (
		<Paper className='p-2'>
			<form id='login-form' onClick={stopProp} onKeyDown={stopProp}>
				<Stack spacing={2}>
					<EmailField />
					<PasswordField label='Password' />
				</Stack>
				<Stack direction='row' spacing={2}></Stack>
			</form>
		</Paper>
	);
};

export default LoginForm;
