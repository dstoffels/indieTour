import { Button, Dialog, Divider, Stack } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';
import DeleteBandBtn from './DeleteBandBtn.jsx';

const DeleteBandModal = props => {
	const { activeMember, deleteBandModal, closeDeleteBandModal } = useBands();
	const handleClose = () => closeDeleteBandModal();
	return (
		<Dialog maxWidth='xs' open={deleteBandModal} onClose={closeDeleteBandModal}>
			<div className='bg-med-grey w-100 p-2'>
				<h5>{`Deleting '${activeMember?.bandName}'`}</h5>
				<Stack spacing={2}>
					<Divider />
					<div>{`Are you ABSOLUTELY certain you want to delete the band '${activeMember?.bandName}'? This action cannot be undone.`}</div>
					<DeleteBandBtn bandName={activeMember?.bandName} />
					<Button color='warning' variant='contained' onClick={handleClose}>
						CANCEL
					</Button>
				</Stack>
			</div>
		</Dialog>
	);
};

export default DeleteBandModal;
