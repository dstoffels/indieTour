import React from 'react';

import {
	Box,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

const ListPanelItem = ({ onClick, icon, active, color = 'primary', children }) => {
	const activeColor = active ? color : '';

	children = (
		<Box padding={1} width='100%'>
			{children}
		</Box>
	);

	return (
		<>
			<ListItem disablePadding color={activeColor}>
				{onClick ? (
					<ListItemButton onClick={onClick} color={activeColor}>
						{icon && (
							<ListItemIcon>{React.cloneElement(icon, { customProps: color })}</ListItemIcon>
						)}
						{children}
					</ListItemButton>
				) : (
					children
				)}
			</ListItem>
			<Divider />
		</>
	);
};

export default ListPanelItem;
