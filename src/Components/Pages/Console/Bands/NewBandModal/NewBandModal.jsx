import { Dialog } from '@mui/material';
import React from 'react';
import BandForm from '../BandForm/BandForm.jsx';
import CreateBandBtn from '../BandForm/CreateBandBtn.jsx';
import useBands from '../useBands.js';
import './BandModal.css';

export const NEW_BAND_FORM_ID = 'new-band-form';

const NewBandModal = props => {
	const { newBandModal, closeNewBandModal: closeBandModal, createBand } = useBands();
	const handleClose = () => closeBandModal();
	const handleSubmit = form => createBand(form);

	return (
		<Dialog fullWidth open={newBandModal} onClose={handleClose}>
			<div>
				<BandForm id={NEW_BAND_FORM_ID} onSubmit={handleSubmit} submitBtn={<CreateBandBtn />} />
			</div>
		</Dialog>
	);
};

export default NewBandModal;
