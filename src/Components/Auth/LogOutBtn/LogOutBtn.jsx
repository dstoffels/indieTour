import { Logout } from '@mui/icons-material';
import { ListItemIcon, MenuItem, Typography } from '@mui/material';
import { HOME } from 'constants/routes.js';
import { logOut } from 'fb/firebase.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import palette from 'theme/palette.js';

const LogOutBtn = props => {
	const navigate = useNavigate();
	const handleClick = () => {
		logOut();
		navigate(HOME);
	};
	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<Logout color='primary' />
			</ListItemIcon>
			<Typography color='primary'>Logout</Typography>
		</MenuItem>
	);
};

export default LogOutBtn;
