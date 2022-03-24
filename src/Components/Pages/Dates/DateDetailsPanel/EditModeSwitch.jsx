import { Stack, Switch, Typography } from '@mui/material';
import useModal from 'Components/Common/MainModal/useModal.js';
import React from 'react';
import useDates from '../useDates.js';

const EditModeSwitch = () => {
	const { editing, toggleEditMode, unsavedChanges } = useDates();
	const { openDeleteModal, modalKeys } = useModal();
	// get active and original data, discard  changes popup if different/unsaved

	const handleChange = () =>
		unsavedChanges ? openDeleteModal(modalKeys.discardDateChanges) : toggleEditMode();

	return (
		<Stack spacing={-1}>
			<Typography color='warning.main' variant='body2'>
				Edit Mode
			</Typography>
			<Switch color='warning' checked={editing} onChange={handleChange} className='mx-auto' />
		</Stack>
	);
};

export default EditModeSwitch;
