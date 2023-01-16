import { Dialog } from '@mui/material';
import useForm from 'hooks/useForm.js';
import useStore from 'hooks/useStore.js';
import React from 'react';
import { closeModal, setModalKey } from 'redux/modalSlice.js';

const Modal = ({}) => {
	const { modal } = useStore();
	const { forms, closeForm } = useForm();

	return (
		<Dialog open={modal.open} onClose={closeForm}>
			{forms[modal.key]}
		</Dialog>
	);
};

export default Modal;
