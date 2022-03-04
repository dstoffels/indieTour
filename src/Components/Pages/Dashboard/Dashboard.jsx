import { Container } from '@mui/material';
import React from 'react';
import { auth } from '../../../firebase/firebase.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import LogOutBtn from '../../Auth/LogOutBtn/LogOutBtn.jsx';
import BottomNav from '../../Common/BottomNav/BottomNav.jsx';

const Dashboard = props => {
	return (
		<>
			<h1>
				Dashboard <LogOutBtn />
			</h1>
			<Container className='bottom-nav'>
				<BottomNav />
			</Container>
		</>
	);
};

export default withAuthentication(Dashboard);
