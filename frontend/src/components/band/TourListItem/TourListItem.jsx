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
import { useDispatch } from 'react-redux';
import { setActiveTour } from 'redux/tourSlice.js';
import useStore from 'hooks/useStore.js';

const TourListItem = ({ tour }) => {
	const { dispatch, activeTour } = useStore();
	const handleClick = e => dispatch(setActiveTour(tour.id));
	const handleOptionsClick = e => {};

	const activeColor = { color: tour.id == activeTour?.id ? 'secondary' : '' };

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<CalendarMonth />
				</ListItemIcon>
				<ListItemText primary={<Typography>{tour.name}</Typography>} />
				<IconButton onClick={handleOptionsClick}>
					<MoreVert />
				</IconButton>
			</ListItemButton>
		</ListItem>
	);
};

export default TourListItem;
