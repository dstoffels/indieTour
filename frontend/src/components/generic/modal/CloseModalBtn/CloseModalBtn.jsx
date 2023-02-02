import { Close } from '@mui/icons-material';
import { Button } from '@mui/material';
import useForm from 'hooks/useForm.js';
import React from 'react';

const CloseModalBtn = ({ x, onClick }) => {
	const { closeForm } = useForm();

	return x ? (
		<Button color='warning' onClick={onClick ? onClick : closeForm}>
			<Close />
		</Button>
	) : (
		<Button onClick={closeForm} color='error' variant='contained'>
			Cancel
		</Button>
	);
};

export default CloseModalBtn;
