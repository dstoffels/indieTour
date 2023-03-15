import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const SelectMenu = ({ options = [], init = '', onChange, id = '', label }) => {
	const [value, setValue] = useState(init);

	const menuItems = options?.map((item, i) => {
		return (
			<MenuItem key={i + '-' + item} value={item}>
				{item}
			</MenuItem>
		);
	});

	useEffect(() => setValue(init), [init]);

	const handleChange = e => {
		setValue(e.target.value);
		onChange(e.target.value);
	};

	return options.length ? (
		<FormControl sx={{ m: 1, width: '90%', maxWidth: 300 }} size='medium'>
			<InputLabel id={id}>{label}</InputLabel>
			<Select size='small' labelId={id} label={label} value={value} onChange={handleChange}>
				{menuItems}
			</Select>
		</FormControl>
	) : null;
};

export default SelectMenu;
