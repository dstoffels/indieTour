import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import './TourSelector.css';

const Selector = ({ id, options, defaultSelection }) => {
	const [selected, setSelected] = useState(defaultSelection);

	const handleChange = e => setSelected(e.target.value);

	const menuItems = options.map(option => (
		<MenuItem key={option.name} value={option.name}>
			{option.name}
		</MenuItem>
	));

	return (
		<div>
			<FormControl>
				<Select
					value={selected}
					onChange={handleChange}
					variant='standard'
					id={id}
					MenuProps={{ PaperProps: { sx: { bgcolor: 'rgb(18,18,18)' } } }}>
					{menuItems}
				</Select>
			</FormControl>
		</div>
	);
};

export default Selector;
