import React from 'react';
import { Box, Divider, ListItemButton, ListItemIcon } from '@mui/material';

const PanelListItem = ({ onClick, icon, active, color = 'primary', children, divider = true }) => {
	children = (
		<Box padding={2} width='100%'>
			{children}
		</Box>
	);

	return (
		<Box borderRight={active ? 5 : 0} borderColor='darkred'>
			{onClick ? (
				<ListItemButton sx={{ padding: 0 }} onClick={onClick}>
					{icon && <ListItemIcon>{React.cloneElement(icon, { customProps: color })}</ListItemIcon>}
					{children}
				</ListItemButton>
			) : (
				children
			)}
			{divider && <Divider />}
		</Box>
	);
};

export default PanelListItem;
