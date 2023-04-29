import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Popover, Typography } from '@mui/material';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import React, { useState } from 'react';

const DeleteDatePopover = ({ date, deleteDate, small = false }) => {
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);

	const handleClick = (e) => setAnchor(e.currentTarget);

	const handleClose = () => {
		setAnchor(null);
	};

	const handleDelete = () => {
		deleteDate(date.id);
		handleClose();
	};

	const btn = small ? (
		<IconButton color='error' onClick={handleClick}>
			<Close />
		</IconButton>
	) : (
		<Button variant='contained' color='error' onClick={handleClick}>
			Delete Date
		</Button>
	);

	return (
		<DeletePopoverBasic btnTxt='Delete Date' onDelete={deleteDate}>
			Are you sure you want to delete this date?
		</DeletePopoverBasic>
	);
};
export default DeleteDatePopover;
