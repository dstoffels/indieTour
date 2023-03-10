import { ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import React from 'react';

const MenuButtonItem = ({ icon = null, children, onClick }) => {
	const listItemIcon = icon && <ListItemIcon>{icon}</ListItemIcon>;

	return (
		<MenuItem onClick={onClick}>
			{listItemIcon}
			<ListItemText>{children}</ListItemText>
		</MenuItem>
	);
};

export default MenuButtonItem;