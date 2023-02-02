import { Add, CalendarMonth } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import ModalForm from '../../ModalForm/ModalForm.jsx';
import AddDates from '../AddDates/AddDates.jsx';

const TourForm = ({}) => {
	const handleSubmit = () => {};

	return (
		<ModalForm title='New Tour' submitText='Create Tour'>
			<Stack spacing={2}>
				<TextField label='Tour Name' name='name' required />
				<AddDates />
				{/* <TextField label='Notes' multiline rows={3} name='notes' /> */}
			</Stack>
		</ModalForm>
	);
};

export default TourForm;
