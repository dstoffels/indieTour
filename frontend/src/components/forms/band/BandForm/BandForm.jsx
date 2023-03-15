import { Box, Paper, Stack, TextField, Typography } from '@mui/material';
import AddUsers from 'components/forms/users/AddUsers/AddUsers.jsx';
import useForm from 'hooks/useForm.js';
import React from 'react';
import ModalForm from '../../ModalForm/ModalForm.jsx';

const BandForm = ({ title, onSubmit, submitText, children }) => {
	const { setFormData, formData, handleFormChange } = useForm();

	const setUsers = users => {
		setFormData({ ...formData, users });
	};

	return (
		<ModalForm title={title} submitText={submitText} onSubmit={onSubmit}>
			<Stack spacing={1}>
				<TextField
					fullWidth
					label='Band Name'
					name='name'
					required
					value={formData.name}
					onChange={handleFormChange}
				/>
				<AddUsers users={formData.users} setUsers={setUsers} />
				{children}
			</Stack>
		</ModalForm>
	);
};

export default BandForm;
