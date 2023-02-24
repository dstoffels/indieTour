import { Add, CalendarMonth } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import useForm from 'hooks/useForm.js';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ModalForm from '../../ModalForm/ModalForm.jsx';
import AddDates from '../AddDates/AddDates.jsx';

const TourForm = ({}) => {
	const { setFormData, formData, handleFormChange } = useForm();

	const handleSubmit = formData => {
		console.log(formData);
	};

	useEffect(() => {
		setFormData({
			name: '',
			notes: '',
			users: [],
			dates: [],
		});
	}, []);

	const setTourDates = dates => {
		setFormData({ ...formData, dates });
	};

	return (
		formData && (
			<ModalForm title='New Tour' submitText='Create Tour' onSubmit={handleSubmit}>
				<Stack spacing={2}>
					<TextField
						label='Tour Name'
						name='name'
						required
						value={formData.name}
						onChange={handleFormChange}
					/>
					<AddDates tourDates={formData.dates} setTourDates={setTourDates} />
					<TextField
						label='Notes'
						multiline
						rows={3}
						name='notes'
						value={formData.notes}
						onChange={handleFormChange}
					/>
				</Stack>
			</ModalForm>
		)
	);
};

export default TourForm;
