import { Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import useDates from '../useDates.js';

const EditModeSwitch = () => {
	const { editMode, toggleEditMode } = useDates();

	return (
		<Stack spacing={-1}>
			<Typography color='warning.main' variant='caption'>
				Edit Mode
			</Typography>
			<Switch color='warning' checked={editMode} onClick={toggleEditMode} />
		</Stack>
	);
};

export default EditModeSwitch;
