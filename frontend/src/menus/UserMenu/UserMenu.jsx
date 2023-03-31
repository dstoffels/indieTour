import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { Divider, IconButton, Menu } from '@mui/material';
import LoginPanel from 'components/auth/LoginPanel/LoginPanel.jsx';
import useAuth from 'hooks/useAuth.js';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({}) => {
	const navigate = useNavigate();
	const { user, logout } = useAuth();
	const [anchor, setAnchor] = useState(null);

	const handleMenu = e => {
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
		console.log(localStorage.getItem('token'));
	};

	return (
		<div>
			<IconButton size='large' onClick={handleMenu}>
				{user ? <AccountCircle /> : <Login />}
			</IconButton>
			<Menu
				anchorEl={anchor}
				keepMounted
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				open={Boolean(anchor)}
				onClose={handleClose}
			>
				{user ? (
					<div>
						<MenuButtonItem disabled>{user?.username}</MenuButtonItem>
						<MenuButtonItem onClick={handleProfile} icon={<AccountCircle />}>
							Profile
						</MenuButtonItem>
						<Divider />
						<MenuButtonItem onClick={handleLogout} icon={<Logout />}>
							Logout
						</MenuButtonItem>
					</div>
				) : (
					<LoginPanel onClose={handleClose} />
				)}
			</Menu>
		</div>
	);
};

export default UserMenu;
