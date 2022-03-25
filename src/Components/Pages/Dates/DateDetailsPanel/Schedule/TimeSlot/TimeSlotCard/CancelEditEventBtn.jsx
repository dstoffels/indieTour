import { Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import useDates from 'Components/Pages/Dates/useDates.js';
import React from 'react';

const CancelEditDateBtn = props => {
	const { unsavedChanges, selectEvent } = useDates();
	const { modalKeys, openDeleteModal } = useModal();

	const handleClick = () => {
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : selectEvent(null);
	};

	return (
		<IconButton
			onClick={handleClick}
			size='large'
			color='warning'
			sx={{ position: 'absolute', top: 0, right: 0 }}>
			<Clear />
		</IconButton>
	);
};

export default CancelEditDateBtn;
