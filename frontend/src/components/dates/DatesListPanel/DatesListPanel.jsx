import { FormControlLabel, Switch } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import DateListItem from '../DateListItem/DateListItem.jsx';
import NewDateForm from '../NewDateForm/NewDateForm.jsx';
import useAPI from 'hooks/useAPI.js';
import useDates from 'hooks/useDates.js';
import { useState } from 'react';
import { useEffect } from 'react';
import useTour from 'hooks/useTour.js';

const DatesListPanel = ({ size, elevation, isAdmin, addTourDate, forTour }) => {
	const [tourdates, setTourdates] = useState([]);

	const { activeTour, fetchTourDates, createTourDate } = useDates();

	useEffect(() => {
		fetchTourDates(setTourdates);
	}, []);

	const datesList = tourdates.map((tourdate, i) => (
		<DateListItem i={i} key={`date-${tourdate.id}`} tourdate={tourdate} forTour={forTour} />
	));

	return (
		<Panel
			title='Tour Dates'
			size={size}
			elevation={elevation}
			actionBtn={<FormControlLabel label='Past Dates' control={<Switch />} />}
		>
			<NewDateForm tourdates={tourdates} addTourDate={createTourDate} />
			{datesList}
		</Panel>
	);
};

export default DatesListPanel;
