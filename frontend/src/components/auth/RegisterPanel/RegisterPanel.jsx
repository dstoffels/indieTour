import { Box, Button, Paper, Stack, TextField } from '@mui/material';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState } from 'react';

const RegisterPanel = ({}) => {
	const { register } = useAuth();
	const defaultValues = { email: '', password: '', password2: '', username: '' };
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(
		defaultValues,
		registerUser,
	);

	function registerUser(userInfo) {
		register(userInfo);
	}

	return (
		<Paper elevation={2}>
			<Box component='form' onSubmit={handleSubmit}>
				<Stack padding={1} spacing={1}>
					<TextField
						name='email'
						type='email'
						value={formData.email}
						onChange={handleChange}
						label='Email'
						required
					/>
					<TextField
						name='password'
						type='password'
						value={formData.password}
						onChange={handleChange}
						label='Password'
						required
					/>
					<TextField
						name='password2'
						type='password'
						value={formData.password2}
						onChange={handleChange}
						label='Confirm Password'
						required
						error={formData.password2 !== formData.password}
					/>
					<TextField
						name='username'
						value={formData.username}
						onChange={handleChange}
						label='Username'
						required
					/>
					<Button type='submit'>Register</Button>
				</Stack>
			</Box>
		</Paper>
	);
};

export default RegisterPanel;
