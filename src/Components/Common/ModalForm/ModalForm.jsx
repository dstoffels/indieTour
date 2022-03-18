import { Paper, Stack } from '@mui/material';
import useForm from 'hooks/useForm.js';
import React from 'react';

const ModalForm = ({ title, formId, onSubmit, children }) => {
	return (
		<Paper className='p-3'>
			<h5>{title} </h5>
			<form id={formId} onSubmit={onSubmit}>
				<Stack spacing={2} marginTop={2}>
					{children}
				</Stack>
			</form>
		</Paper>
	);
};

export default ModalForm;
