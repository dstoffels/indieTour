import { Logout } from '@mui/icons-material';
import { ListItemIcon, MenuItem } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes.js';
import { logOut } from '../../../firebase/firebase.js';

const LogOutBtn = props => {
	const navigate = useNavigate();
	const handleClick = () => {
		logOut();
		navigate(HOME);
	};
	return (
		<MenuItem onClick={handleClick}>
			<ListItemIcon>
				<Logout />
			</ListItemIcon>
			Logout
		</MenuItem>
	);
};

export default LogOutBtn;
