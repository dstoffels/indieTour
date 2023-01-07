import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectMenu = ({ options, value, onChange, id = '', label }) => {
	const menuItems = options.map((item, i) => (
		<MenuItem key={i + '-' + item} value={i}>
			{item}
		</MenuItem>
	));

	return (
		<FormControl sx={{ m: 1, width: '90%', maxWidth: 300 }} size='small'>
			<InputLabel id={id}>{label}</InputLabel>
			<Select labelId={id} label={label} value={value} onChange={onChange}>
				{menuItems}
			</Select>
		</FormControl>
	);
};

export default SelectMenu;
