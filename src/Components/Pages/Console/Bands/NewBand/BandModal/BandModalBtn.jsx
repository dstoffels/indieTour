import { Button } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { openBandModal } from './bandModalSlice.js';
import useBandModal from './useBandModal.js';

const BandModalBtn = props => {
	const { openBandModal } = useBandModal();
	const handleClick = () => openBandModal();
	return (
		<Button variant='contained' color='success' onClick={handleClick}>
			Create New Band
		</Button>
	);
};

export default BandModalBtn;
