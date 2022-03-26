import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import ScrollWindow from 'Components/Common/ScrollWindow/ScrollWindow.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React, { useState } from 'react';
import AddDateModalBtn from '../AddDateModal/AddDateModalBtn.jsx';
import DateCard from './DateCard/DateCard.jsx';
import PastDatesToggle from './PastDatesToggle.jsx';

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
		<Panel
			title='Tour Dates'
			actions={[
				<PastDatesToggle key='past-dates-toggle' />,
				<AddDateModalBtn key='date-modal-btn' />,
			]}>
			<ScrollWindow maxHeight='70vh'>{tourDateCards}</ScrollWindow>
		</Panel>
	);
};

export default DatesPanel;
