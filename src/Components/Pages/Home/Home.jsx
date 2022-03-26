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
import Logo from 'images/logo.png';

const Home = props => {
	useLogin();
	const [signup, setSignup] = useState(false);

	const handleSignup = () => setSignup(true);

	return (
		<Container>
			<img width='100%' src={Logo} alt='' />
			<Card
				sx={{ maxWidth: 500, margin: 'auto', marginY: '2rem' }}
				elevation={3}
				className='welcome-dialog'>
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
