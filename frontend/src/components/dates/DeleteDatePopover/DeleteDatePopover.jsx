import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

const DeleteDatePopover = ({ date, deleteDate, small = false }) => {
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);

	const handleClick = e => setAnchor(e.currentTarget);

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
		<>
			{btn}
			<Popover
				open={open}
				anchorEl={anchor}
				onClose={handleClose}
				transformOrigin={{ vertical: 'center', horizontal: 'center' }}
				anchorOrigin={{ vertical: 'center', horizontal: 'center' }}>
				<Paper>
					<Box padding={2} textAlign='center'>
						<Typography>Are you sure you want to delete this date?</Typography>
						<Button onClick={handleDelete} color='error'>
							Confirm
						</Button>
						<Button onClick={handleClose} color='warning'>
							Cancel
						</Button>
					</Box>
				</Paper>
			</Popover>
		</>
	);
};
export default DeleteDatePopover;
