import { CalendarMonth } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment/moment.js';
import React, { useState } from 'react';
import DateFormBasic from '../DateFormBasic/DateFormBasic.jsx';

const AddDates = ({ tourDates, setTourDates }) => {
	// const [dateForms, setDateForms] = useState([]);

	const handleClick = () => {
		const lastDate = tourDates[tourDates.length - 1];
		const newDate = {
			title: '',
			date: lastDate
				? moment(lastDate.date).add(1, 'day').format('YYYY-MM-DD')
				: moment().format('YYYY-MM-DD'),
		};
		setTourDates([...tourDates, newDate]);
	};

	const dateForms = tourDates.map((tourDate, i) => (
		<DateFormBasic
			key={`dateForm-${i}`}
			tourDate={tourDate}
			tourDates={tourDates}
			setTourDates={setTourDates}
			i={i}
		/>
	));

	return (
		<Stack spacing={1}>
			{dateForms}
			<Button onClick={handleClick} variant='text' startIcon={<CalendarMonth />}>
				Add Tour Date
			</Button>
		</Stack>
	);
};

export default AddDates;
