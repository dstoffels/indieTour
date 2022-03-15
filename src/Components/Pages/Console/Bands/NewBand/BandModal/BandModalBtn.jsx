import { Add } from '@mui/icons-material';
import { Fab, Tooltip } from '@mui/material';
import React from 'react';
import useBandModal from './useBandModal.js';

const BandModalBtn = props => {
	const { openBandModal } = useBandModal();
	const handleClick = () => openBandModal();

	return (
		<Tooltip title='Create new band'>
			<Fab size='small' color='primary' onClick={handleClick}>
				<Add />
			</Fab>
		</Tooltip>
	);
};

export default BandModalBtn;
