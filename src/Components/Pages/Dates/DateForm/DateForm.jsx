import { TextField } from '@mui/material';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import useForm from 'hooks/useForm.js';
import React from 'react';

const fields = {
	date: '',
	type: '',
	title: '',
	location: '',
	deal: '',
	notes: '',
	isConfirmed: false,
	timeslots: [],
	contacts: [],
};

const DateForm = ({ title, id, onSubmit, submitBtn, values = fields, actions }) => {
	const { form, handleChange, handleSubmit } = useForm(values, () => {
		onSubmit(form);
	});

	console.log(form);

	return (
		<ModalForm title={title} onSubmit={handleSubmit} formId={id}>
			<TextField
				autoFocus
				required
				type='date'
				label='Date'
				name='date'
				value={form.date}
				onChange={handleChange}
			/>
			{submitBtn}
		</ModalForm>
	);
};

export default DateForm;
