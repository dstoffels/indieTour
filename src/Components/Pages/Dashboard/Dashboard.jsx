import React from 'react';
import { DASHBOARD } from '../../../constants/routes.js';
import usePrevPage from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import BottomNav from '../../Common/BottomNav/BottomNav.jsx';

const Dashboard = props => {
	usePrevPage(DASHBOARD);
	return (
		<>
			<h1>Console</h1>
		</>
	);
};

export default withAuthentication(Dashboard);
