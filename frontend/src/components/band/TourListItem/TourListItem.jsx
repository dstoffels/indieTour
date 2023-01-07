import React from 'react';
import {
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { CalendarMonth, MoreVert } from '@mui/icons-material';

const TourListItem = ({ tour }) => {
	return (
		<ListItem disablePadding>
			<ListItemButton>
				<ListItemIcon>
					<CalendarMonth />
				</ListItemIcon>
				<ListItemText primary={tour.name} />
				<IconButton>
					<MoreVert />
				</IconButton>
			</ListItemButton>
		</ListItem>
	);
};

export default TourListItem;
