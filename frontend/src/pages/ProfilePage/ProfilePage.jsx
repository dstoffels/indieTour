import { Paper, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import useAuth from 'hooks/useAuth.js';
import React, { useState } from 'react';

const ProfilePage = ({}) => {
	const { user } = useAuth();

	const [username, setUsername] = useState(user.username);

	return (
		<div id='profile'>
			<Paper elevation={3}>
				<Typography variant='h4'>Profile</Typography>
				<Stack width={500}>
					<TextField
						label='Display Name'
						value={username}
						onChange={e => setUsername(e.target.value)}
						variant='standard'
					/>
				</Stack>
			</Paper>
		</div>
	);
};

export default ProfilePage;
