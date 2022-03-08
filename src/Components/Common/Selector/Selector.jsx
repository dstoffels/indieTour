import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import './Selector.css';

const Selector = ({ id, options, nameKey, defaultSelection }) => {
	const [selected, setSelected] = useState(defaultSelection);

	const handleChange = e => setSelected(e.target.value);

	const menuItems = options.map(option => (
		<MenuItem key={option[nameKey]} value={option[nameKey]}>
			{option[nameKey]}
		</MenuItem>
	));

	return (
		<FormControl fullWidth className='selector'>
			<Select
				className='selector'
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
