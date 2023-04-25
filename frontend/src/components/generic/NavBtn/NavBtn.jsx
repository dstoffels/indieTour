import { Button } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavBtn = ({ to, children }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleClick = () => {
		navigate(to);
	};

	const color = pathname === to ? 'secondary' : 'primary';

	return (
		<Button color={color} onClick={handleClick}>
			{children}
		</Button>
	);
};

export default NavBtn;
