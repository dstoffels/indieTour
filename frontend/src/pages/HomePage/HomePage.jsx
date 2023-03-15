import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import RegisterPanel from 'components/auth/RegisterPanel/RegisterPanel.jsx';
import Page from 'pages/Page/Page.jsx';

const HomePage = () => {
	const { user } = useAuth();
	return user ? (
		<Navigate to='/' />
	) : (
		<Page>
			<h1>Welcome to indietour!</h1>
			<RegisterPanel />
		</Page>
	);
};

export default HomePage;
