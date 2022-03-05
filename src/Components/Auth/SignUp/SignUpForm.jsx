import { Button, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME, LOGIN, WAITING_ROOM } from '../../../constants/routes.js';
import { auth, createEmailUser } from '../../../firebase/firebase.js';
import useForm from '../../../hooks/useForm.js';
import AuthForm from '../AuthForm/AuthForm.jsx';
import { SIGNUP_FORM_ID } from '../constants.js';
import EmailField from '../FormFields/EmailField/EmailField.jsx';
import PasswordField from '../FormFields/PasswordField/PasswordField.jsx';

const SignUpForm = props => {
	// HOOKS
	const navigate = useNavigate();

	useEffect(() => {
		auth.currentUser && navigate(HOME);
	}, []);

	// STATE
	const [error, setError] = useState('');
	const initialState = { email: '', displayName: '', password: '', confirmPassword: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, onSubmit);

	useEffect(() => {
		form.password !== form.confirmPassword ? setError('Passwords do not match') : setError('');
	}, [form.password, form.confirmPassword]);

	async function onSubmit() {
		try {
			await createEmailUser(form);
		} catch (e) {
			setError(e.code);
		}
	}

	return (
		<form id={SIGNUP_FORM_ID} onSubmit={handleSubmit}>
			<Stack spacing={2} marginBottom={2}>
				<EmailField value={form?.email} onChange={handleChange} />
				<TextField
					label='Username'
					name='displayName'
					value={form.displayName}
					onChange={handleChange}
				/>
				<PasswordField value={form.password} onChange={handleChange} label='Password' />
				<PasswordField
					value={form.confirmPassword}
					onChange={handleChange}
					label='Confirm password'
					name='confirmPassword'
				/>
				<i className='text-danger'>{error}</i>
			</Stack>
		</form>
	);
};

export default SignUpForm;
