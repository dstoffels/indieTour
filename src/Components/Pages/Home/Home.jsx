import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Container,
	Divider,
	Stack,
	Typography,
} from '@mui/material';
import React, { useState } from 'react';
import useLogin from '../../../hooks/useLogin.js';
import SignUpBtn from '../../Auth/AuthForm/SignUp/SignUpBtn.jsx';
import SignUpForm from '../../Auth/AuthForm/SignUp/SignUpForm.jsx';

import './Home.css';

const Home = props => {
	const [signup, setSignup] = useState(false);

	const handleSignup = () => setSignup(true);

	useLogin();
	return (
		<Container>
			<Card
				sx={{ maxWidth: 500, margin: 'auto', marginY: '2rem' }}
				elevation={3}
				className='welcome-dialog'>
				<CardHeader
					className='text-center'
					title={
						signup ? (
							'Create new account'
						) : (
							<Typography variant='h4'>Welcome to indieTour!</Typography>
						)
					}
					subheader={
						signup ? (
							''
						) : (
							<Typography variant='h6'>Tour management for the independent artist</Typography>
						)
					}
				/>
				<Divider />
				<CardContent>
					{signup ? (
						<div className='p-2 w-100'>
							<SignUpForm />
						</div>
					) : (
						<Stack spacing={1}>
							<Typography>Plot tours & manage booking</Typography>
							<Typography>Set & share schedules with band/crew</Typography>
							<Typography>Create & manage unlimited tours</Typography>
							<Typography>Manage multiple artists/bands</Typography>
						</Stack>
					)}
				</CardContent>
				<Divider />
				<CardActions className='d-flex justify-content-between'>
					<div></div>
					{signup ? (
						<SignUpBtn />
					) : (
						<Button variant='outlined' onClick={handleSignup}>
							CREATE NEW ACCOUNT
						</Button>
					)}
				</CardActions>
			</Card>
		</Container>
	);
};

export default Home;
