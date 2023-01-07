import React from 'react';
import {
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Typography,
} from '@mui/material';
import { AccountCircle, MoreVert } from '@mui/icons-material';

const UserListItem = ({ user }) => {
	return (
		<ListItem disablePadding>
			<ListItemIcon>
				<AccountCircle />
			</ListItemIcon>
			<ListItemText primary={user.username} secondary={user.email} />
			<Typography marginRight={3}>
				{user.is_owner ? 'Owner' : user.is_admin ? 'Admin' : ''}
			</Typography>
			<IconButton>
				<MoreVert />
			</IconButton>
		</ListItem>
	);
};

export default UserListItem;
