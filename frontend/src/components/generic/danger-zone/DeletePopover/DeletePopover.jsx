import { Box, Button, Paper, Popover, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const DeletePopover = ({ btnText = '', confirmationTxt = '', onDelete = () => {}, children }) => {
	const [anchor, setAnchor] = useState(null);
	const [confirmName, setConfirmName] = useState('');

	const handleClick = (e) => setAnchor(e.currentTarget);

	const handleClose = () => {
		setConfirmName('');
		setAnchor(null);
	};

	const handleDelete = () => {
		onDelete();
		handleClose();
	};

	const open = Boolean(anchor);

	const confirmed = confirmName === confirmationTxt;

	return (
		<Box padding={2}>
			<Button fullWidth variant='contained' color='error' onClick={handleClick}>
				{btnText}
			</Button>
			<Popover
				open={open}
				anchorEl={anchor}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
				transformOrigin={{
					vertical: 'center',
					horizontal: 'center',
				}}
			>
				<Paper>
					<Stack padding={2} spacing={2}>
						<Typography color='error' variant='overline'>
							{children}
						</Typography>
						<Typography>Please type {confirmationTxt} to confirm</Typography>
						<TextField
							variant='standard'
							value={confirmName}
							onChange={(e) => setConfirmName(e.target.value)}
						/>
						<Button onClick={handleDelete} disabled={!confirmed} color='error'>
							DELETE {confirmationTxt}
						</Button>
						<Button onClick={handleClose} color='warning'>
							Cancel
						</Button>
					</Stack>
				</Paper>
			</Popover>
		</Box>
	);
};

export default DeletePopover;
