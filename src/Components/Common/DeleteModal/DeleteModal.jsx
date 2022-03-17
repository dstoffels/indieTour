import { Dialog } from '@mui/material';
import React from 'react';
import useModal from '../MainModal/useModal.js';

const DeleteModal = ({ modal }) => {
	const { deleteModal } = useModal();
	return <Dialog>{modal}</Dialog>;
};

export default DeleteModal;
