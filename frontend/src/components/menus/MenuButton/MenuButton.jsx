import { KeyboardArrowDown } from '@mui/icons-material';
import { Button, Divider, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const MenuButton = ({ btnTxt, items = [], actionBtn, onClick, menuTxtKey }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleItemClick = (item) => {
		onClick(item);
		handleClose();
	};

	const menuItems = items.map((item) => (
		<MenuItem key={item.id} onClick={() => handleItemClick(item)}>
			{item[menuTxtKey]}
		</MenuItem>
	));

	return (
		<>
			<Button onClick={handleClick} endIcon={<KeyboardArrowDown />}>
				{btnTxt}
			</Button>
			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
			>
				{menuItems}
				{actionBtn && (
					<div>
						<Divider />
						{actionBtn}
					</div>
				)}
			</Menu>
		</>
	);
};

export default MenuButton;
