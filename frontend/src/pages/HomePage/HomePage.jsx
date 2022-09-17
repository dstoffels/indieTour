import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import RegisterPanel from 'components/auth/RegisterPanel/RegisterPanel.jsx';

const HomePage = () => {
	const { user } = useAuth();
	return user ? (
		<Navigate to='/' />
	) : (
		<div className='container'>
			<h1>Welcome to indietour!</h1>
			<RegisterPanel />
		</div>
	);
};

export default HomePage;
