import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';

const NewBandModalBtn = props => {
	const { openNewBandModal: openBandModal } = useBands();
	const handleClick = () => openBandModal();

	return (
		<Tooltip title='Create new band'>
			<Fab size='small' color='success' onClick={handleClick}>
				<Add />
			</Fab>
		</Tooltip>
	);
};

export default NewBandModalBtn;
