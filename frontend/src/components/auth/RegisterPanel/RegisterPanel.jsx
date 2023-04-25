import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState } from 'react';

const RegisterPanel = ({}) => {
	const { register } = useAuth();
	const defaultValues = { email: '', password: '', password2: '', username: '' };
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(defaultValues, register);

	return (
		<Panel title='New here?' size={6}>
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
		</Panel>
	);
};

export default RegisterPanel;
