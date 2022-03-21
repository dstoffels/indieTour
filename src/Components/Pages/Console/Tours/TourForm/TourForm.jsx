import { Paper, TextField } from '@mui/material';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import DatesForm from 'Components/Pages/Dates/DatesForm/DatesForm.jsx';
import React, { useState } from 'react';

const fields = { name: '', notes: '', dates: [] };

const TourForm = ({ title, id, onSubmit, submitBtn, values = fields, actions }) => {
	const [name, setName] = useState(values.name);
	const [notes, setNotes] = useState(values.notes);
	const [dates, setDates] = useState(values.dates);

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ name, notes, dates });
	};

	return (
		<Paper elevation={0}>
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
			<DatesForm dates={dates} setDates={setDates} />
			{submitBtn}
		</Paper>
	);
};

export default TourForm;
