import { Dialog } from '@mui/material';
import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import CloseModalBtn from './CloseModalBtn/CloseModalBtn.jsx';
import useModal from './useModal.js';

const MainModal = props => {
	const { modals, mainModal, closeMainModal } = useModal();

	return (
		<>
			<DeleteModal />
			<Dialog fullWidth open={Boolean(mainModal)} onClose={closeMainModal}>
				<CloseModalBtn />
				{modals[mainModal]}
			</Dialog>
		</>
	);
};

export default MainModal;
