import { Stack, TextField } from '@mui/material';
import { SIGNUP_FORM_ID } from 'Components/Auth/constants.js';
import { HOME } from 'constants/routes.js';
import { auth, createEmailUser } from 'fb/firebase.js';
import useForm from 'hooks/useForm.js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmailField from '../EmailField/EmailField.jsx';
import PasswordField from '../PasswordField/PasswordField.jsx';

const SignUpForm = props => {
	// HOOKS
	const navigate = useNavigate();

	useEffect(() => {
		auth.currentUser && navigate(HOME);
	}, [navigate]);

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

	const stopProp = e => e.stopPropagation();

	return (
		<form id={SIGNUP_FORM_ID} onSubmit={handleSubmit} onClick={stopProp} onKeyDown={stopProp}>
			<Stack spacing={2} marginTop={2}>
				<EmailField value={form?.email} onChange={handleChange} />
				<TextField
					label='Username'
					name='displayName'
					value={form.displayName}
					onChange={handleChange}
					InputLabelProps={{ sx: { color: 'white' } }}
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
