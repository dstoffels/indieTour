import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME, LOGIN, WAITING_ROOM } from '../../../constants/routes.js';
import { auth, createEmailUser } from '../../../firebase/firebase.js';
import useForm from '../../../hooks/useForm.js';
import AuthForm from '../AuthForm/AuthForm.jsx';
import EmailField from '../FormFields/EmailField/EmailField.jsx';
import PasswordField from '../FormFields/PasswordField/PasswordField.jsx';

const SignUp = props => {
	// HOOKS
	const navigate = useNavigate();
	const initialState = { email: '', displayName: '', password: '', confirmPassword: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, signUp);
	const formId = 'sign-up-form';

	useEffect(() => {
		auth.currentUser && navigate(HOME);
	}, []);

	// STATE
	const [error, setError] = useState('');

	useEffect(() => {
		form.password !== form.confirmPassword ? setError('Passwords do not match') : setError('');
	}, [form.password, form.confirmPassword]);

	async function signUp() {
		try {
			await createEmailUser(form);
			navigate(WAITING_ROOM);
		} catch (e) {
			setError(e.code);
		}
	}

	const priBtn = (
		<Button form={formId} type='submit' size='large' variant='contained'>
			SIGN UP
		</Button>
	);
	const secBtn = (
		<Button
			onClick={() => {
				navigate(LOGIN);
			}}
			size='small'>
			SIGN IN
		</Button>
	);

	return (
		<AuthForm
			formId={formId}
			title='Sign up for a new account'
			onSubmit={handleSubmit}
			priBtn={priBtn}
			secBtn={secBtn}>
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
		</AuthForm>
	);
};

export default SignUp;
