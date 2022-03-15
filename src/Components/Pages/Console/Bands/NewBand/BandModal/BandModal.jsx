import { Dialog } from '@mui/material';
import React from 'react';
import NewBandForm from '../../NewBandForm/NewBandForm.jsx';
import './BandModal.css';
import useBandModal from './useBandModal.js';

const BandModal = props => {
	const { bandModal, closeBandModal } = useBandModal();
	const handleClose = () => closeBandModal();

	return (
		<Dialog fullWidth open={bandModal} onClose={handleClose}>
			<div>
				<NewBandForm />
			</div>
		</Dialog>
	);
};

export default BandModal;
