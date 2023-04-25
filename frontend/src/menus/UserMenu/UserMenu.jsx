import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { Divider, IconButton, Menu, Tooltip } from '@mui/material';
import useAuth from 'hooks/useAuth.js';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({}) => {
	const navigate = useNavigate();
	const { user, logout } = useAuth();
	const [anchor, setAnchor] = useState(null);

	const handleMenu = (e) => {
		setAnchor(e.currentTarget);
	};

	const handleClose = () => setAnchor(null);

	const handleProfile = () => {
		handleClose();
		navigate('/profile');
	};

	const handleLogout = () => {
		handleClose();
		logout();
	};

	return (
		<div>
			<Tooltip title='Log In'>
				<IconButton size='large' onClick={handleMenu}>
					{user ? <AccountCircle /> : <Login />}
				</IconButton>
			</Tooltip>
			<Menu
				anchorEl={anchor}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={Boolean(anchor)}
				onClose={handleClose}
			>
				<MenuButtonItem disabled>{user?.username}</MenuButtonItem>
				<MenuButtonItem onClick={handleProfile} icon={<AccountCircle />}>
					Profile
				</MenuButtonItem>
				<Divider />
				<MenuButtonItem onClick={handleLogout} icon={<Logout />}>
					Logout
				</MenuButtonItem>
			</Menu>
		</div>
	);
};

export default UserMenu;
