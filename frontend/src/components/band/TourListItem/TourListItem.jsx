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
import TourMenu from '../TourMenu/TourMenu.jsx';

const TourListItem = ({ tour }) => {
	const { dispatch, activeTour } = useStore();
	const handleClick = e => dispatch(setActiveTour(tour.id));
	const handleOptionsClick = e => {
		e.stopPropagation();
		console.log('aaa');
	};

	const activeColor = { color: tour.id == activeTour?.id ? 'secondary' : '' };

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<CalendarMonth />
				</ListItemIcon>
				<ListItemText primary={<Typography>{tour.name}</Typography>} />
				<TourMenu />
			</ListItemButton>
		</ListItem>
	);
};

export default TourListItem;
