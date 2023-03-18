import React from 'react';
import { Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import withActiveTour from 'utils/withActiveTour.js';

const TourListItem = ({ tour, activeTour, setActiveTour }) => {
	const handleClick = e => setActiveTour(tour.id);

	const activeColor = tour.id == activeTour?.id ? 'primary' : '';

	return (
		<PanelListItem onClick={handleClick}>
			<Typography variant='body1' color={activeColor}>
				{tour.name}
			</Typography>
		</PanelListItem>
	);
};

export default withActiveTour(TourListItem);
