import { AccountCircle, Add, AddBox, AddCircle, Edit, Login, Logout } from '@mui/icons-material';
import { Divider, IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import LoginPanel from 'components/auth/LoginPanel/LoginPanel.jsx';
import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import useForm from 'hooks/useForm.js';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WithAdmin from 'utils/WithAdmin/WithAdmin.jsx';

const UserMenu = ({}) => {
	const navigate = useNavigate();
	const { user, logout } = useAuth();
	const { formKeys, openForm } = useForm();
	const { activeBand } = useBand();
	const [anchor, setAnchor] = useState(null);

	const handleMenu = e => {
		setAnchor(e.currentTarget);
	};

	const handleClose = () => setAnchor(null);

	const handleProfile = () => {
		handleClose();
		navigate('/profile');
	};

	const handleNewBand = () => {
		openForm(formKeys.newBand, { name: '', users: [] });
		handleClose();
	};

	const handleEditBand = () => {
		openForm(formKeys.editBand, activeBand);
		handleClose();
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
						<MenuButtonItem disabled>{user?.username}</MenuButtonItem>
						<MenuButtonItem onClick={handleProfile} icon={<AccountCircle />}>
							Profile
						</MenuButtonItem>
						<Divider />
						<MenuButtonItem onClick={handleNewBand} icon={<AddCircle />}>
							New Band
						</MenuButtonItem>
						<WithAdmin>
							<MenuButtonItem onClick={handleEditBand} icon={<Edit />}>
								Edit Band
							</MenuButtonItem>
						</WithAdmin>
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
