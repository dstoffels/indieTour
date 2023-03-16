import React from 'react';

import {
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';

const ListPanelItem = ({ onClick, icon, active, color = 'primary', children }) => {
	const activeClass = active ? color : '';

	return (
		<ListItem disablePadding>
			{onClick ? (
				<ListItemButton onClick={onClick} color={color}>
					{icon && <ListItemIcon>{React.cloneElement(icon, { customProps: color })}</ListItemIcon>}
					<ListItemText
						primary={
							<Typography variant='h6' color={activeClass}>
								{children}
							</Typography>
						}
					/>
				</ListItemButton>
			) : (
				<ListItemText primary={<Typography color={activeClass}>{children}</Typography>} />
			)}
		</ListItem>
	);
};

export default ListPanelItem;
