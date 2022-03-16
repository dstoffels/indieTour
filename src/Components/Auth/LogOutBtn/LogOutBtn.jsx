import { Logout } from '@mui/icons-material';
import { ListItemIcon, MenuItem } from '@mui/material';
import { HOME } from 'constants/routes.js';
import { colors } from 'constants/theme.js';
import { logOut } from 'fb/firebase.js';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOutBtn = props => {
	const navigate = useNavigate();
	const handleClick = () => {
		logOut();
		navigate(HOME);
	};
	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<Logout htmlColor={colors.text} />
			</ListItemIcon>
			Logout
		</MenuItem>
	);
};

export default LogOutBtn;
