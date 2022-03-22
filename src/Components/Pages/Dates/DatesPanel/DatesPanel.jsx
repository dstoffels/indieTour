import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React, { useState } from 'react';
import DateCard from './DateCard/DateCard.jsx';

const DatesPanel = props => {
	const { activeTourDates } = useTours();
	const [selectedDate, setSelectedDate] = useState('');

	const tourDateCards = activeTourDates?.map((tourDate, i, a) => (
		<div key={tourDate.date}>
			<DateCard tourDate={tourDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
			{i < a.length - 1 && <Divider />}
		</div>
	));

	return (
		<Panel title='Tour Dates' actions={'here'}>
			<div style={{ margin: '0 -0.5rem', maxHeight: '80vh', overflowY: 'auto' }}>
				<div style={{ margin: ' 0 0.5rem' }}>{tourDateCards}</div>
			</div>
		</Panel>
	);
};

export default DatesPanel;
