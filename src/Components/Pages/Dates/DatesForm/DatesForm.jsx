import { Button, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import MiniDateForm from './MiniDateForm.jsx';

const getTodayFieldStr = () => {
	const today = new Date();
	return `${today.getFullYear()}-${('0' + (today.getMonth() + 1)).slice(-2)}-${(
		'0' + today.getDate()
	).slice(-2)}`;
};

const dateTemplate = {
	date: getTodayFieldStr(),
	type: '',
	title: '',
	location: '',
	deal: '',
	notes: '',
	isConfirmed: false,
	timeslots: [],
	contacts: [],
};

const DatesForm = ({ tourForm, tourFormOnChange }) => {
	const [dates, setDates] = useState([...tourForm.dates]);

	const handleSubmit = e => {
		e.preventDefault();
		const newDates = [...dates, { ...dateTemplate, key: Math.random() }];
		setDates(newDates);
	};

	const handleChange = (i, data) => {
		const newDates = [...dates];
		newDates[i] = { ...dates[i], ...data };
		setDates(newDates);
	};

	useEffect(() => {
		tourFormOnChange({
			target: {
				name: 'dates',
				value: dates,
			},
		});
	}, [dates]);

	// DATES MUST BE UNIQUE
	console.log(dates);

	const miniDateForms = dates
		.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
		.map((date, i) => {
			return (
				<MiniDateForm
					key={date.key}
					i={i}
					date={date}
					dates={dates}
					setDates={setDates}
					onChange={handleChange}
				/>
			);
		});

	return (
		<div className='px-3'>
			<form onSubmit={handleSubmit}>
				<Stack spacing={1} marginBottom={3}>
					{miniDateForms}
					<Button type='submit' fullWidth>
						{dates.length ? 'Add Date' : 'Add Dates'}
					</Button>
				</Stack>
			</form>
		</div>
	);
};

export default DatesForm;
