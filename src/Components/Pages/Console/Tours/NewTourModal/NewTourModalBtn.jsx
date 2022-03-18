import React from 'react';
import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';

const NewTourModalBtn = props => {
	const { modalKeys, openMainModal } = useModal();
	const handleClick = () => openMainModal(modalKeys.newTour);
	return (
		<Button onClick={handleClick} startIcon={<Add />}>
			CREATE NEW TOUR
		</Button>
	);
};

export default NewTourModalBtn;
