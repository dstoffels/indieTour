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
import { setActiveTourThunk } from 'redux/tourSlice.js';
import useStore from 'hooks/useStore.js';
import TourMenu from '../TourMenu/TourMenu.jsx';
import useTour from 'hooks/useTour.js';

const TourListItem = ({ tour }) => {
	const { activeTour, setActiveTour } = useTour();
	const handleClick = e => setActiveTour(tour.id);
	const handleOptionsClick = e => {
		e.stopPropagation();
		console.log('aaa');
	};

	const activeColor = tour.id == activeTour?.id ? 'primary' : '';

	return (
		<ListItem disablePadding>
			<ListItemButton onClick={handleClick} color='primary'>
				<ListItemIcon>
					<CalendarMonth color={activeColor} />
				</ListItemIcon>
				<ListItemText primary={<Typography color={activeColor}>{tour.name}</Typography>} />
			</ListItemButton>
		</ListItem>
	);
};

export default TourListItem;
