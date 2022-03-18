import { Divider, Paper, Stack, TextField } from '@mui/material';
import ModalForm from 'Components/Common/ModalForm/ModalForm.jsx';
import useForm from 'hooks/useForm.js';
import React from 'react';

const fields = { name: '', notes: '' };
const TourForm = ({ title, id, onSubmit, submitBtn, values = fields, actions }) => {
	const { form, handleChange, handleSubmit } = useForm(values, () => {
		onSubmit(form);
	});

	return (
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
			{/* <i className='text-danger'>{error}</i> */}
			{submitBtn}
			<div className='flex-end'>{actions}</div>
		</ModalForm>
	);
};

export default TourForm;
