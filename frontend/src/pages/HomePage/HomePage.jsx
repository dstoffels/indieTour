import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import RegisterPanel from 'components/auth/RegisterPanel/RegisterPanel.jsx';
import Page from 'pages/Page/Page.jsx';
import { Grid } from '@mui/material';

const HomePage = () => {
	return (
		<Page>
			<RegisterPanel />
		</Page>
	);
};

export default HomePage;
