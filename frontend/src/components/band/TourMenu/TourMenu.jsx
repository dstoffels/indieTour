import { Archive, Delete, DeleteForever, Edit, MoreVert } from '@mui/icons-material';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const TourMenu = ({}) => {
	const [anchor, setAnchor] = useState(null);

	const handleMenu = e => {
		e.stopPropagation();
		setAnchor(e.currentTarget);
	};

	const handleClose = () => setAnchor(null);

	const handleClick = e => {
		e.stopPropagation();
		handleClose();
	};

	return (
		<>
			<IconButton onClick={handleMenu}>
				<MoreVert />
			</IconButton>

			<Menu
				onClick={handleClick}
				anchorEl={anchor}
				keepMounted
				open={Boolean(anchor)}
				onClose={handleClose}>
				<MenuItem>
					<ListItemIcon>
						<Edit fontSize='small' />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<Archive fontSize='small' />
					</ListItemIcon>
					<ListItemText>Archive</ListItemText>
				</MenuItem>
				<MenuItem>
					<ListItemIcon>
						<DeleteForever fontSize='small' />
					</ListItemIcon>
					<ListItemText>Delete</ListItemText>
				</MenuItem>
			</Menu>
		</>
	);
};

export default TourMenu;
