import { CalendarMonth } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment/moment.js';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTourDate } from 'redux/modalSlice.js';
import DateFormBasic from '../DateFormBasic/DateFormBasic.jsx';

const AddDates = ({}) => {
	const [dateForms, setDateForms] = useState([]);
	const dispatch = useDispatch();

	const handleClick = () => {
		const tourDate = { title: '', date: moment().format('YYYY-MM-DD'), hidden: false };
		dispatch(setTourDate({ i: dateForms.length, tourDate }));

		setDateForms([
			...dateForms,
			<DateFormBasic key={`dateForm-${dateForms.length}`} i={dateForms.length} />,
		]);
	};

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
