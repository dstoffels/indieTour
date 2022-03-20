import { Divider, Paper, Stack, TextField } from '@mui/material';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import DatesForm from 'Components/Pages/Dates/DatesForm/DatesForm.jsx';
import useForm from 'hooks/useForm.js';
import React from 'react';

const fields = { name: '', notes: '', dates: [] };

const TourForm = ({ title, id, onSubmit, submitBtn, values = fields, actions }) => {
	const { form, handleChange, handleSubmit } = useForm(keyValues(), () => {
		onSubmit(form);
	});

	/**
	 * dates will be automatically sorted,
	 * keys must be generated before components are displayed
	 */
	function keyValues() {
		const dates = values.dates.map((date, i) => {
			return { ...date, key: i };
		});
		return { ...values, dates };
	}

	return (
		<Paper elevation={0}>
			<ModalForm title={title} formId={id} onSubmit={handleSubmit}>
				<TextField
					autoFocus
					required
					label='Tour Name'
					value={form.name}
					name='name'
					onChange={handleChange}
				/>
				<TextField
					label='Notes'
					name='notes'
					value={form.notes}
					onChange={handleChange}
					multiline
					rows={3}
				/>
			</ModalForm>
			<DatesForm tourForm={form} tourFormOnChange={handleChange} />
			<div className='px-3'>{submitBtn}</div>
			<div className='flex-end px-3 pb-3'>{actions}</div>
		</Paper>
	);
};

export default TourForm;
