import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const AddDateModalBtn = props => {
	const { openMainModal, modalKeys } = useModal();
	const handleClick = () => openMainModal(modalKeys.newDate);
	return (
		<Button color='primary' variant='text' onClick={handleClick} startIcon={<Add />}>
			ADD DATES
		</Button>
	);
};

export default AddDateModalBtn;
