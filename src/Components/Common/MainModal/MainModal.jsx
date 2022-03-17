import { Dialog } from '@mui/material';
import EditBandModal from 'Components/Pages/Console/Bands/EditBandModal/EditBandModal.jsx';
import NewBandModal from 'Components/Pages/Console/Bands/NewBandModal/NewBandModal.jsx';
import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import useModal from './useModal.js';

const MainModal = props => {
	const { modals, mainModal, closeMainModal } = useModal();

	return (
		<>
			<DeleteModal />
			<Dialog fullWidth open={Boolean(mainModal)} onClose={closeMainModal}>
				{modals[mainModal]}
			</Dialog>
		</>
	);
};

export default MainModal;
