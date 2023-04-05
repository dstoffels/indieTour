import { Close } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

const DeletePopoverBasic = ({ btnTxt = '', children, onDelete, small = false }) => {
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);

	const handleClick = (e) => setAnchor(e.currentTarget);

	const handleClose = () => {
		setAnchor(null);
	};

	const handleDelete = () => {
		onDelete();
		handleClose();
	};

	const btn = small ? (
		<IconButton color='error' onClick={handleClick}>
			<Close />
		</IconButton>
	) : (
		<Button variant='contained' color='error' onClick={handleClick}>
			{btnTxt}
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
				anchorOrigin={{ vertical: 'center', horizontal: 'center' }}
			>
				<Paper>
					<Box padding={2} textAlign='center'>
						<Typography>{children}</Typography>
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
export default DeletePopoverBasic;
