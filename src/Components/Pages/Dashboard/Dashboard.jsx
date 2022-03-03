import React from 'react';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import LogOutBtn from '../../Auth/LogOutBtn/LogOutBtn.jsx';

const Dashboard = props => {
	return (
		<h1>
			Dashboard <LogOutBtn />
		</h1>
	);
};

export default withAuthentication(Dashboard);
