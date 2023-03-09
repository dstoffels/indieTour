import { IconButton, Menu } from '@mui/material';
import React, { useState } from 'react';

const MenuButton = ({ buttonIcon, children }) => {
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
			<IconButton onClick={handleMenu}>{buttonIcon}</IconButton>

			<Menu
				onClick={handleClick}
				anchorEl={anchor}
				keepMounted
				open={Boolean(anchor)}
				onClose={handleClose}>
				{children}
			</Menu>
		</>
	);
};

export default MenuButton;
