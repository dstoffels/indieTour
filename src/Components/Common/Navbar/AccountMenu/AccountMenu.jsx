<<<<<<< HEAD
import { Login, , Settings } from '@mui/icons-material';
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
=======
import { Login, Settings } from '@mui/icons-material';
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem } from '@mui/material';
import AuthForm from 'Components/Auth/AuthForm/AuthForm/AuthForm.jsx';
import LogOutBtn from 'Components/Auth/LogOutBtn/LogOutBtn.jsx';
import useUser from 'hooks/useUser.js';
>>>>>>> console
import React, { useState } from 'react';

const AccountMenu = props => {
	// STATE
	const { user } = useUser();
	// LOCAL STATE
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	// HANDLERS
	const handleClick = e => setAnchorEl(e.currentTarget);
	const handleClose = () => setAnchorEl(null);

	const width = !user && { width: 400 };
	const menuItems = user ? (
		[
			<MenuItem disabled key='display-name'>
				Hi, {user.displayName}!
			</MenuItem>,
			<MenuItem key='settings-btn'>
				<ListItemIcon>
					<Settings />
				</ListItemIcon>
				Settings
			</MenuItem>,
			<LogOutBtn key='logout-btn' />,
		]
	) : (
		<AuthForm />
	);

	return (
		<div>
			<IconButton onClick={handleClick} size='small'>
				{user ? (
					<Avatar sx={{ width: 32, height: 32 }}>{user?.displayName?.charAt(0)}</Avatar>
				) : (
					<>
						<span className='me-1'>Login</span>
						<Login />
					</>
				)}
			</IconButton>

			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
				PaperProps={{
					elevation: 5,
					sx: {
						...width,
						backgroundColor: 'rgb(18,18,18)',
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'rgb(18,18,18)',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}>
				{menuItems}
			</Menu>
		</div>
	);
};

export default AccountMenu;
