import { FormControlLabel, Stack, Switch, Tooltip, Typography } from '@mui/material';
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
		<Tooltip title='Toggle edit mode'>
			<FormControlLabel
				label='Edit'
				componentsProps={{ typography: { color: 'warning.main', variant: 'button' } }}
				control={
					<Switch color='warning' checked={editing} onChange={handleChange} className='mx-auto' />
				}
			/>
		</Tooltip>
	);
};

export default EditModeSwitch;
