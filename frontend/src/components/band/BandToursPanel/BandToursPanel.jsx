import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import TourListItem from '../TourListItem/TourListItem.jsx';

const BandToursPanel = ({ activeBand }) => {
	const toursList = activeBand.tours.map(tour => (
		<TourListItem tour={tour} key={`tour-${tour.id}`} />
	));

	return (
		<Panel title='Tours' size={4} elevation={-1}>
			<NewTourForm />
			{toursList}
		</Panel>
	);
};

export default withActiveBand(BandToursPanel);
