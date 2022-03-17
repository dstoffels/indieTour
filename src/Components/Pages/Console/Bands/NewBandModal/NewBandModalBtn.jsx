import { Add } from '@mui/icons-material';
import { Button, Fab, Tooltip } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';

const NewBandModalBtn = ({ text }) => {
	const { openMainModal, modalKeys } = useModal();
	const handleClick = () => openMainModal(modalKeys.newBand);

	return (
		<Tooltip title='Create new band'>
			{text ? (
				<Button fullWidth color='success' variant='contained' onClick={handleClick}>
					{text}
				</Button>
			) : (
				<Fab size='small' color='success' onClick={handleClick}>
					<Add />
				</Fab>
			)}
		</Tooltip>
	);
};

export default NewBandModalBtn;
