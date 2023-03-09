import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLink = ({ to, children }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(to);
	};

	return (
		<Button size='large' variant='text' onClick={handleClick}>
			{children}
		</Button>
	);
};

export default NavLink;
