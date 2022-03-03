import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME, SIGNUP } from '../../../constants/routes.js';
import { emailLogin } from '../../../firebase/firebase.js';
import useForm from '../../../hooks/useForm.js';
import AuthForm from '../AuthForm/AuthForm.jsx';
import EmailField from '../FormFields/EmailField/EmailField.jsx';
import PasswordField from '../FormFields/PasswordField/PasswordField.jsx';
import { setUser } from './userSlice.js';

const SignInForm = props => {
	// HOOKS
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const initialState = { email: '', password: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, signIn);
	const formId = 'sign-in-form';

	// STATE
	const [error, setError] = useState('');

	async function signIn() {
		try {
			const userCredentials = await emailLogin(form);
			dispatch(setUser(userCredentials.user));
			navigate(HOME);
		} catch (e) {
			setError(e.message);
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

	return (
		<AuthForm
			formId={formId}
			title='Sign in to your account'
			onSubmit={handleSubmit}
			priBtn={priBtn}
			secBtn={secBtn}>
			<EmailField value={form?.email} onChange={handleChange} />
			<PasswordField value={form?.password} onChange={handleChange} label='Password' />
			<i className='text-danger'>{error}</i>
		</AuthForm>
	);
};

export default SignInForm;
