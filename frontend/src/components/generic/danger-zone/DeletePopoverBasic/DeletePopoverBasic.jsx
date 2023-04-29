import { Close, Delete } from '@mui/icons-material';
import { Box, Button, IconButton, Paper, Popover, Typography } from '@mui/material';
import React, { useState } from 'react';

const DeletePopoverBasic = ({
	btnTxt = '',
	children,
	onDelete,
	small = false,
	onOpen,
	onClose,
}) => {
	const [anchor, setAnchor] = useState(null);
	const open = Boolean(anchor);

	const handleClick = (e) => {
		setAnchor(e.currentTarget);
		onOpen();
	};

	const handleClose = () => {
		setAnchor(null);
		onClose();
	};

	const handleDelete = () => {
		onDelete();
		handleClose();
	};

	const btn = small ? (
		<IconButton color='error' onClick={handleClick}>
			<Delete />
		</IconButton>
	) : (
		<Button fullWidth variant='contained' color='error' onClick={handleClick}>
			{btnTxt}
		</Button>
	);

	return (
		<Box padding={2}>
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
		</Box>
	);
};
export default DeletePopoverBasic;
