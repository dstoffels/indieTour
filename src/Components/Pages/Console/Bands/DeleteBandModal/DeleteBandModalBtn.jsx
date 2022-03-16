import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';

const DeleteBandModalBtn = props => {
	const { openDeleteBandModal } = useBands();
	const handleClick = () => openDeleteBandModal();
	return (
		<Button fullWidth size='small' color='error' onClick={handleClick} variant='contained'>
			<Delete />
		</Button>
	);
};

export default DeleteBandModalBtn;
