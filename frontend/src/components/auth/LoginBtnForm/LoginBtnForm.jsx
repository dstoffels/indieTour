import { Login } from '@mui/icons-material';
import { Box, Button, IconButton, Popover, Stack, TextField } from '@mui/material';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState } from 'react';

const LoginBtnForm = ({}) => {
	const [anchor, setAnchor] = useState(null);
	const { login } = useAuth();
	const { formData, handleChange, handleSubmit, reset } = useCustomForm(
		{ email: '', password: '' },
		handleLogin,
	);

	const handleClick = (e) => {
		setAnchor(e.currentTarget);
	};

	const handleClose = () => {
		setAnchor(null);
	};

	async function handleLogin(credentials) {
		await login(credentials);
		handleClose();
	}

	const open = Boolean(anchor);

	return (
		<>
			<IconButton onClick={handleClick}>
				<Login />
			</IconButton>
			<Popover open={open} anchorEl={anchor} onClose={handleClose}>
				<Box component='form' onSubmit={handleSubmit}>
					<Stack padding={2} spacing={2}>
						<TextField
							label='Email'
							type='email'
							required
							name='email'
							value={formData.email}
							onChange={handleChange}
						/>
						<TextField
							label='Password'
							name='password'
							type='password'
							required
							value={formData.password}
							onChange={handleChange}
						/>
						<Button type='submit'>Login</Button>
					</Stack>
				</Box>
			</Popover>
		</>
	);
};

export default LoginBtnForm;
