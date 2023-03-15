import { Button, Paper, Popover, Stack, TextField, Typography } from '@mui/material';
import useBand from 'hooks/useBand.js';
import useForm from 'hooks/useForm.js';
import React, { useState } from 'react';

const DeleteBandPopover = ({}) => {
	const [anchor, setAnchor] = useState(null);
	const [confirmName, setConfirmName] = useState('');
	const { closeForm } = useForm();

	const { activeBand, deleteBand } = useBand();

	const handleClick = e => setAnchor(e.currentTarget);

	const handleClose = () => {
		setConfirmName('');
		setAnchor(null);
	};

	const handleDelete = () => {
		deleteBand(activeBand.id);
		handleClose();
		closeForm();
	};

	const open = Boolean(anchor);

	const confirmed = confirmName === activeBand.name;

	return (
		<>
			<Button variant='contained' color='error' onClick={handleClick}>
				DELETE BAND
			</Button>
			<Popover
				open={open}
				anchorEl={anchor}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				transformOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}>
				<Paper>
					<Stack padding={2} spacing={2}>
						<Typography color='error' variant='overline'>
							WARNING: Permanently deleting a band cannot be undone.
						</Typography>
						<Typography>Please type {activeBand.name} to confirm</Typography>
						<TextField
							variant='standard'
							value={confirmName}
							onChange={e => setConfirmName(e.target.value)}
						/>
						<Button onClick={handleDelete} disabled={!confirmed} color='error'>
							DELETE {activeBand.name}
						</Button>
						<Button onClick={handleClose} color='warning'>
							Cancel
						</Button>
					</Stack>
				</Paper>
			</Popover>
		</>
	);
};

export default DeleteBandPopover;
