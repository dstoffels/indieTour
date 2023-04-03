import { FormControlLabel, Switch } from '@mui/material';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useState } from 'react';
import TourListItem from '../TourListItem/TourListItem.jsx';
import useTour from 'hooks/useTour.js';
import { useEffect } from 'react';
import useBand from 'hooks/useBand.js';

const ToursListPanel = ({ size, elevation }) => {
	const [showArchived, setShowArchived] = useState(false);
	const [tours, setTours] = useState([]);

	const { activeBand } = useBand();
	const { activeTour, fetchBandTours, fetchUserActiveTour } = useTour();

	useEffect(() => {
		fetchUserActiveTour();
	}, [activeBand]);

	useEffect(() => {
		fetchBandTours(setTours);
	}, [activeBand, activeTour]);

	const toursList = tours
		.filter((tour) => showArchived === tour.is_archived || !tour.is_archived)
		.map((tour) => <TourListItem tour={tour} key={`tour-${tour.id}`} />);

	const archivedBtn = (
		<FormControlLabel
			control={<Switch value={showArchived} onChange={(e) => setShowArchived(e.target.checked)} />}
			label='Archived'
		/>
	);

	return (
		<Panel title='Tours' size={size} elevation={elevation} actionBtn={archivedBtn}>
			<NewTourForm />
			{toursList}
		</Panel>
	);
};

export default ToursListPanel;
