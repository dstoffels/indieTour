import { Button, Dialog, Divider, Stack } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useBands from '../useBands.js';
import DeleteBandBtn from './DeleteBandBtn.jsx';

const DeleteBandModal = props => {
	const { activeMember } = useBands();

	const { closeDeleteModal } = useModal();

	const handleClose = () => closeDeleteModal();

	return (
		<div className='p-4'>
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
	);
};

export default DeleteBandModal;
