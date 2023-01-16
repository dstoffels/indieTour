import { Add } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import ModalForm from '../ModalForm/ModalForm.jsx';

const TourForm = ({}) => {
	return (
		<ModalForm title='Create New Tour'>
			<Stack spacing={2}>
				<TextField label='Tour Name' name='name' required />
				<TextField label='Notes' multiline rows={3} name='notes' />
				<Button variant='text' startIcon={<Add />}>
					Add Date
				</Button>
			</Stack>
		</ModalForm>
	);
};

export default TourForm;
