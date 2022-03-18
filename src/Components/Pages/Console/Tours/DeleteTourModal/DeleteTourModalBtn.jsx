import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const DeleteTourModalBtn = props => {
	const { modalKeys, openDeleteModal } = useModal();

	const handleClick = () => openDeleteModal(modalKeys.delTour);

	return (
		<Button onClick={handleClick} color='error' startIcon={<Delete />}>
			DELETE TOUR
		</Button>
	);
};

export default DeleteTourModalBtn;
