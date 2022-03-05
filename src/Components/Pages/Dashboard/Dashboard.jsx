import { Container } from '@mui/material';
import React from 'react';
import { DASHBOARD } from '../../../constants/routes.js';
import usePrevPage from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import LogOutBtn from '../../Auth/LogOutBtn/LogOutBtn.jsx';
import BottomNav from '../../Common/BottomNav/BottomNav.jsx';

const Dashboard = props => {
	usePrevPage(DASHBOARD);
	return (
		<>
			<h1>Dashboard</h1>
			<BottomNav className='bottom-nav' />
		</>
	);
};

export default withAuthentication(Dashboard);
