import { CalendarMonth } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import DateFormBasic from '../DateFormBasic/DateFormBasic.jsx';

const AddDates = ({}) => {
	const [dateForms, setDateForms] = useState([]);

	const handleDelete = dateForm => {
		const i = dateForms.findIndex(dateForm);
	};

	const handleClick = () =>
		setDateForms([
			...dateForms,
			<DateFormBasic key={`dateForm-${dateForms.length}`} onDelete={handleDelete} />,
		]);

	return (
		<Stack spacing={1}>
			{dateForms}
			<Button onClick={handleClick} variant='text' startIcon={<CalendarMonth />}>
				Add Date
			</Button>
		</Stack>
	);
};

export default AddDates;
