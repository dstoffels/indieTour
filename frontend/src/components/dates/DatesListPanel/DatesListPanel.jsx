import { FormControlLabel, Switch } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import DateListItem from '../DateListItem/DateListItem.jsx';
import NewDateForm from '../NewDateForm/NewDateForm.jsx';
import useDates from 'hooks/useDates.js';
import { useState } from 'react';
import { useEffect } from 'react';
import useTour from 'hooks/useTour.js';

const DatesListPanel = ({ size, elevation }) => {
	const [tourdates, setTourDates] = useState([]);

	const { activeTour } = useTour();
	const { fetchTourDates, addTourDate } = useDates(setTourDates);

	useEffect(() => {
		fetchTourDates(setTourDates);
	}, [activeTour]);

	const datesList = tourdates.map((tourdate, i) => (
		<DateListItem key={`date-${tourdate.id}`} tourdate={tourdate} />
	));

	return (
		<Panel
			title='Tour Dates'
			size={size}
			elevation={elevation}
			actionBtn={<FormControlLabel label='Past Dates' control={<Switch />} />}
		>
			<NewDateForm tourdates={tourdates} setTourDates={setTourDates} />
			{datesList}
		</Panel>
	);
};

export default DatesListPanel;
