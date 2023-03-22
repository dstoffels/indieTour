import React from 'react';
import { Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import withActiveTour from 'utils/withActiveTour.js';
import { useNavigate } from 'react-router-dom';

const TourListItem = ({ tour, activeTour, setActiveTour }) => {
	const navigate = useNavigate();
	const handleClick = async e => {
		await setActiveTour(tour.id);
		navigate('/tour');
	};

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
