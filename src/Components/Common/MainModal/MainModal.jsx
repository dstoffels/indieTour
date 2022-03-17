import { Dialog } from '@mui/material';
import React from 'react';
import DeleteModal from '../DeleteModal/DeleteModal.jsx';
import useModal from './useModal.js';

const MainModal = ({ modal, deleteModal = null }) => {
	const { modal } = useModal();
	return (
		<>
			<DeleteModal modal={deleteModal} />
			<Dialog className='bg-med-grey' fullWidth open={modal} onClose={() => {}}>
				{modal}
			</Dialog>
		</>
	);
};

export default MainModal;
