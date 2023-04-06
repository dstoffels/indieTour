import { BottomNavigationAction, Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavLink = ({ to, disabled, label, icon }) => {
	const { pathname } = useLocation();
	const onPage = pathname === to;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(to);
	};

	return (
		<BottomNavigationAction
			showLabel
			label={label}
			icon={icon}
			size='large'
			disabled={onPage}
			onClick={handleClick}
		></BottomNavigationAction>
	);
};

export default NavLink;
