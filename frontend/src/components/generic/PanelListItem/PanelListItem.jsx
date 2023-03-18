import React from 'react';
import { Box, Divider, ListItemButton, ListItemIcon } from '@mui/material';

const PanelListItem = ({ onClick, icon, active, color = 'primary', children }) => {
	children = (
		<Box padding={1} width='100%'>
			{children}
		</Box>
	);

	return (
		<div>
			{onClick ? (
				<ListItemButton onClick={onClick}>
					{icon && <ListItemIcon>{React.cloneElement(icon, { customProps: color })}</ListItemIcon>}
					{children}
				</ListItemButton>
			) : (
				children
			)}
			<Divider />
		</div>
	);
};

export default PanelListItem;
