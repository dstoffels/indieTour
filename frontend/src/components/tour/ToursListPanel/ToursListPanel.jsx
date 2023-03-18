import { FormControlLabel, Switch } from '@mui/material';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useState } from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import TourListItem from '../../band/TourListItem/TourListItem.jsx';

const ToursListPanel = ({ activeBand, size, elevation }) => {
	const [showArchived, setShowArchived] = useState(false);

	const toursList = activeBand.tours
		.filter(tour => showArchived === tour.is_archived || !tour.is_archived)
		.map(tour => <TourListItem tour={tour} key={`tour-${tour.id}`} />);

	const archivedBtn = (
		<FormControlLabel
			control={<Switch value={showArchived} onChange={e => setShowArchived(e.target.checked)} />}
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

export default withActiveBand(ToursListPanel);
