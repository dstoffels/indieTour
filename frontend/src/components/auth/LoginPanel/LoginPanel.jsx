import { Button, Paper, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import useRequests from 'hooks/useRequests.js';
import React, { useState } from 'react';
import { useContext } from 'react';

const LoginPanel = ({ onClose }) => {
	const { login } = useAuth();

	const defaultValues = { email: '', password: '' };
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(defaultValues, loginUser);

	function loginUser(credentials) {
		login(credentials);
		onClose();
	}

	return (
		<Box component='form' onSubmit={handleSubmit}>
			<Stack paddingX={1} spacing={1}>
				<TextField
					label='Email'
					size='small'
					type='email'
					required
					name='email'
					value={formData.email}
					onChange={handleChange}
				/>
				<TextField
					label='Password'
					name='password'
					size='small'
					type='password'
					required
					value={formData.password}
					onChange={handleChange}
				/>
				<Button type='submit'>Login</Button>
			</Stack>
		</Box>
	);
};

export default LoginPanel;
