import { Button, Typography } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NavLink = ({ to, children, disabled }) => {
	const { pathname } = useLocation();
	const onPage = pathname === to;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(to);
	};

	return (
		<Button size='large' disabled={onPage} sx={{ fontWeight: 600 }} onClick={handleClick}>
			{children}
		</Button>
	);
};

export default NavLink;
