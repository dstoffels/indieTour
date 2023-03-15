import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import AddUsers from 'components/forms/users/AddUsers/AddUsers.jsx';
import useForm from 'hooks/useForm.js';
import React, { useEffect } from 'react';
import ModalForm from '../../ModalForm/ModalForm.jsx';
import AddDates from '../AddDates/AddDates.jsx';

const TourForm = ({ onSubmit, submitText, title }) => {
	const { setFormData, formData, handleFormChange } = useForm();

	const setTourDates = dates => {
		setFormData({ ...formData, dates });
	};

	const setUsers = users => {
		setFormData({ ...formData, users });
	};

	return (
		formData && (
			<ModalForm title={title} submitText={submitText} onSubmit={onSubmit}>
				<Stack spacing={2}>
					<TextField
						label='Tour Name'
						name='name'
						required
						value={formData.name}
						onChange={handleFormChange}
					/>
					<AddDates tourDates={formData.dates} setTourDates={setTourDates} />
					<AddUsers users={formData.users} setUsers={setUsers} forTour />
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
