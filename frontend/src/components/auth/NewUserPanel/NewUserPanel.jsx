import endpoints from 'utils/endpoints.js';
import axios from 'axios';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import useAuth from 'hooks/useAuth.js';
import useCustomForm from 'hooks/useCustomForm.js';
import { useNavigate } from 'react-router-dom';

const NewUserPanel = ({ token }) => {
	const { login } = useAuth();
	console.log(token);

	const defaultValues = { password: '', password2: '', username: '' };
	const [form, handleInputChange, handleSubmit, reset] = useCustomForm(defaultValues, updateUser);

	async function updateUser(formData) {
		try {
			const response = await axios.patch(endpoints.user(), formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			login({ email: response.data, password: form.password });
		} catch (error) {}
	}

	return (
		<Paper elevation={2}>
			<Box component='form' onSubmit={handleSubmit}>
				<Stack padding={1} spacing={1}>
					<Typography>
						Welcome to indietour, please setup your account to continue. You will not be able to
						login until you set a username and password.
					</Typography>
					<TextField
						name='username'
						value={form.username}
						onChange={handleInputChange}
						label='Username'
						required
					/>
					<TextField
						name='password'
						type='password'
						value={form.password}
						onChange={handleInputChange}
						label='Password'
						required
					/>
					<TextField
						name='password2'
						type='password'
						value={form.password2}
						onChange={handleInputChange}
						label='Confirm Password'
						required
						error={form.password2 !== form.password}
					/>
					<Button type='submit'>Register</Button>
				</Stack>
			</Box>
		</Paper>
	);
};

export default NewUserPanel;