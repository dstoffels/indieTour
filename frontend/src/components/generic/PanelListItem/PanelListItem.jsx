import React from 'react';
import { Box, Divider, ListItemButton, ListItemIcon } from '@mui/material';

const PanelListItem = ({
	onClick,
	icon,
	active,
	color = 'primary',
	children,
	divider = true,
	padding = 2,
	paddingX,
	paddingY,
}) => {
	children = (
		<Box padding={padding} width='100%' paddingX={paddingX} paddingY={paddingY}>
			{children}
		</Box>
	);

	const border = active ? 2 : 0;

	return (
		<Box border={border} borderColor='darkred'>
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
