import { AccountCircle, Login, Logout } from '@mui/icons-material';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import LoginPanel from 'components/auth/LoginPanel/LoginPanel.jsx';
import AuthContext from 'context/AuthContext.js';
import useAuth from 'hooks/useAuth.js';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from 'redux/userSlice.js';

const UserMenu = ({}) => {
	const navigate = useNavigate();
	const { user, logout } = useAuth();
	// const { logoutUser } = useContext(AuthContext);
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
				onClose={handleClose}>
				{user ? (
					<div>
						<MenuItem disabled>Welcome {user?.username}!</MenuItem>
						<MenuItem onClick={handleProfile}>
							<ListItemIcon>
								<AccountCircle />
							</ListItemIcon>
							<ListItemText>Profile</ListItemText>
						</MenuItem>
						<MenuItem onClick={handleLogout}>
							<ListItemIcon>
								<Logout />
							</ListItemIcon>
							<ListItemText>Logout</ListItemText>
						</MenuItem>
					</div>
				) : (
					<LoginPanel onClose={handleClose} />
				)}
			</Menu>
		</div>
	);
};

export default UserMenu;
