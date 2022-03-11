import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import './Selector.css';

const Selector = ({ id, options, nameKey, onChange, defaultSelection, className }) => {
	const [selected, setSelected] = useState(defaultSelection);

	const handleChange = e => {
		setSelected(e.target.value);
		onChange(e.target.value);
	};

	const menuItems = options.map(option => (
		<MenuItem key={option[nameKey]} value={option[nameKey]}>
			{option[nameKey]}
		</MenuItem>
	));

	return (
		<FormControl fullWidth className={`${className} selector`}>
			<Select
			placeholder=''
				className={`selector`}
				value={selected}
				onChange={handleChange}
				variant='standard'
				id={id}
				MenuProps={{ PaperProps: { sx: { bgcolor: 'rgb(18,18,18)' } } }}>
				{menuItems}
			</Select>
		</FormControl>
	);
};

export default Selector;
