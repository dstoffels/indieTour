import { Paper, Stack, TextField } from '@mui/material';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import DatesForm from 'Components/Pages/Dates/DatesForm/DatesForm.jsx';
import React, { useState } from 'react';

export const Tour = () => {
	return {
		name: '',
		notes: '',
		dates: [],
		startDate: '',
		endDate: '',
		numDates: 0,
	};
};

const TourForm = ({ title, id, onSubmit, submitBtn, values = Tour(), actions }) => {
	const [name, setName] = useState(values.name);
	const [notes, setNotes] = useState(values.notes);
	const [startDate, setStartDate] = useState(values.startDate);
	const [endDate, setEndDate] = useState(values.startDate);
	const [numDates, setNumDates] = useState(values.startDate);
	const [dates, setDates] = useState(values.dates);

	const updateDates = newDates => {
		setStartDate(newDates[0].date);
		setEndDate(newDates[newDates.length - 1].date);
		setNumDates(newDates.length);
		setDates(newDates);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ name, notes, dates, startDate, endDate, numDates });
	};

	return (
		<Paper elevation={0} className='p-3'>
			<ModalForm title={title} formId={id} onSubmit={handleSubmit}>
				<TextField
					autoFocus
					required
					label='Tour Name'
					value={name}
					name='name'
					onChange={e => setName(e.target.value)}
				/>
				<TextField
					label='Notes'
					name='notes'
					value={notes}
					onChange={e => setNotes(e.target.value)}
					multiline
					rows={3}
				/>
			</ModalForm>
			<DatesForm dates={dates} setDates={updateDates} />
			<Stack spacing={1}>
				{submitBtn}
				<div className='flex-end'>{actions}</div>
			</Stack>
		</Paper>
	);
};

export default TourForm;
