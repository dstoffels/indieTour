import { Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailLogin } from '../../../../firebase/firebase.js';
import useForm from '../../../../hooks/useForm.js';
import { LOGIN_FORM_ID } from '../../constants.js';
import EmailField from '../FormFields/EmailField/EmailField.jsx';
import PasswordField from '../FormFields/PasswordField/PasswordField.jsx';

const LoginForm = props => {
	// HOOKS
	const navigate = useNavigate();

	// STATE
	const initialState = { email: '', password: '' };
	const { form, handleChange, handleSubmit } = useForm(initialState, login);
	const [error, setError] = useState('');

	async function login() {
		try {
			await emailLogin(form);
		} catch (e) {
			setError(e.code);
		}
	}

	const stopProp = e => e.stopPropagation();

	return (
		<form id={LOGIN_FORM_ID} onSubmit={handleSubmit} onClick={stopProp} onKeyDown={stopProp}>
			<Stack spacing={2} marginTop={2}>
				<EmailField value={form.email} onChange={handleChange} />
				<PasswordField value={form.password} onChange={handleChange} label='Password' />
				<i className='text-danger'>{error}</i>
			</Stack>
		</form>
	);
};

export default LoginForm;
