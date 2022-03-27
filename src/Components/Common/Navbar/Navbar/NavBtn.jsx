import { Button, Typography } from '@mui/material';
import useUser from 'hooks/useUser.js';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBtn = ({ label, page, activeIcon, inactiveIcon, disabled = false }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const { user } = useUser();

	const isActive = location.pathname === page;

	const handleClick = () => navigate(page);

	if (user) {
		return (
			<Button
				onClick={handleClick}
				size='small'
				disabled={disabled}
				color={isActive ? 'primary' : 'inherit'}
				sx={{ textTransform: 'none' }}
				startIcon={isActive ? activeIcon : inactiveIcon}>
				<Typography variant='h6'>{label}</Typography>
			</Button>
		);
	}
	return null;
};

export default NavBtn;
