import { Dialog } from '@mui/material';
import useForm from 'hooks/useForm.js';
import useStore from 'hooks/useStore.js';
import React from 'react';

const Modal = ({ zIndex = 100 }) => {
	const { modal } = useStore();
	const { forms } = useForm();

	return (
		<Dialog sx={{ zIndex }} open={modal.open}>
			{forms[modal.key]}
		</Dialog>
	);
};

export default Modal;
