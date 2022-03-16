import { Dialog } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';
import DeleteBandBtn from './DeleteBandBtn.jsx';

const DeleteBandModal = props => {
	const { activeMember, deleteBandModal, closeDeleteBandModal } = useBands();
	const handleClose = () => closeDeleteBandModal();
	return (
		<Dialog open={deleteBandModal} onClose={closeDeleteBandModal}>
			<div>{`Are you ABSOLUTELY sure you want to delete ${activeMember.bandName}?`}</div>
			<DeleteBandBtn />
			<Button onClick={handleClose}>CANCEL</Button>
		</Dialog>
	);
};

export default DeleteBandModal;
