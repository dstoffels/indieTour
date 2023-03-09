import { Add, CalendarMonth } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import useForm from 'hooks/useForm.js';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTour } from 'redux/tourSlice.js';
import ModalForm from '../../ModalForm/ModalForm.jsx';
import AddDates from '../AddDates/AddDates.jsx';

const TourForm = ({ onSubmit, submitText, title }) => {
	const { setFormData, formData, handleFormChange } = useForm();

	const handleSubmit = formData => {
		onSubmit(formData);
	};

	const setTourDates = dates => {
		setFormData({ ...formData, dates });
	};

	return (
		formData && (
			<ModalForm title={title} submitText={submitText} onSubmit={handleSubmit}>
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
