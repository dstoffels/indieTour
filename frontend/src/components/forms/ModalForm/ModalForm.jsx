import React from 'react';
import { Button, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import useForm from 'hooks/useForm.js';
import { Stack } from '@mui/system';
import { Close } from '@mui/icons-material';
import './ModalForm.css';

const ModalForm = ({ title, children }) => {
	const { closeForm } = useForm();

	return (
		<form className='modal-form'>
			<Stack direction='row' justifyContent='space-between'>
				<DialogTitle>{title}</DialogTitle>
				<Button color='warning' onClick={closeForm}>
					<Close />
				</Button>
			</Stack>
			<DialogContent>{children}</DialogContent>
			<DialogActions></DialogActions>
		</form>
	);
};

export default ModalForm;
