import { Button, Paper, Popover, Stack, TextField, Typography } from '@mui/material';
import DeletePopover from 'components/generic/DeletePopover/DeletePopover.jsx';
import useBand from 'hooks/useBand.js';
import useForm from 'hooks/useForm.js';
import React, { useState } from 'react';

const DeleteBandPopover = ({}) => {
	const { activeBand, deleteBand } = useBand();

	const handleDelete = () => deleteBand(activeBand.id);

	return (
		<DeletePopover btnText='DELETE BAND' confirmationTxt={activeBand.name} onDelete={handleDelete}>
			WARNING: Permanently deleting a band cannot be undone.
		</DeletePopover>
	);
};

export default DeleteBandPopover;
