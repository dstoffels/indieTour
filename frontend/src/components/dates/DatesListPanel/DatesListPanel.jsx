import { FormControlLabel, Switch } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import DateListItem from '../DateListItem/DateListItem.jsx';
import NewDateForm from '../NewDateForm/NewDateForm.jsx';

const DatesListPanel = ({ size, elevation, activeTour, isAdmin, addTourDate, forTour }) => {
	const tourdates = activeTour.dates.map((tourdate, i) => (
		<DateListItem i={i} key={`date-${tourdate.id}`} tourdate={tourdate} forTour={forTour} />
	));

	return (
		<Panel
			title='Tour Dates'
			size={size}
			elevation={elevation}
			actionBtn={<FormControlLabel label='Past Dates' control={<Switch />} />}>
			<NewDateForm activeTour={activeTour} addTourDate={addTourDate} />
			{tourdates}
		</Panel>
	);
};

export default DatesListPanel;
