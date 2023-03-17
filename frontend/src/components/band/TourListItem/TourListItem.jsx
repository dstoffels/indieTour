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
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import withActiveTour from 'utils/withActiveTour.js';

const TourListItem = ({ tour, activeTour, setActiveTour }) => {
	const handleClick = e => setActiveTour(tour.id);

	const handleOptionsClick = e => {
		e.stopPropagation();
		console.log('aaa');
	};

	const activeColor = tour.id == activeTour?.id ? 'primary' : '';

	return (
		<ListPanelItem onClick={handleClick}>
			<Typography variant='body1' color={activeColor}>
				{tour.name}
			</Typography>
		</ListPanelItem>
	);
};

export default withActiveTour(TourListItem);
