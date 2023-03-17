import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import TourListItem from '../TourListItem/TourListItem.jsx';

const BandToursPanel = ({ activeBand }) => {
	const toursList = activeBand.tours.map(tour => (
		<TourListItem tour={tour} key={`tour-${tour.id}`} />
	));

	return (
		<ListPanel title='Tours' size={4} elevation={-1}>
			{toursList}
			<Button startIcon={<Add />}>Add Tour</Button>
		</ListPanel>
	);
};

export default withActiveBand(BandToursPanel);
