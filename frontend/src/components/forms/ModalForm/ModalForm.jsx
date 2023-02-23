import React from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import useForm from 'hooks/useForm.js';
import { Stack } from '@mui/system';
import { Close } from '@mui/icons-material';
import './ModalForm.css';
import CloseModalBtn from '../../generic/modal/CloseModalBtn/CloseModalBtn.jsx';

const ModalForm = ({ title, children, submitText, onSubmit }) => {
	const { closeForm, formData } = useForm();

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(formData);
		closeForm();
	};

	return (
		<form className='modal-form' onSubmit={handleSubmit}>
			<Stack direction='row' justifyContent='space-between'>
				<DialogTitle>{title}</DialogTitle>
				<CloseModalBtn x />
			</Stack>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button type='submit' variant='contained' color='success'>
					{submitText}
				</Button>
				<CloseModalBtn />
			</DialogActions>
		</form>
	);
};

export default ModalForm;
