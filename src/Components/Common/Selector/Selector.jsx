import { Autocomplete, MenuItem, Select } from '@mui/material';
import React, { memo, useEffect, useState } from 'react';
import { FormControl } from '@mui/material';
import './Selector.css';

const Selector = ({ id, options, nameKey, onChange, defaultSelection, className }) => {
	const [selected, setSelected] = useState(defaultSelection[nameKey]);

	const handleChange = e => {
		setSelected(e.target.value);
		onChange(e.target.value);
	};

	useEffect(() => {
		setSelected(defaultSelection[nameKey]);
	}, [defaultSelection]);

	const menuItems = [...options]
		.sort((a, b) => {
			if (a[nameKey] < b[nameKey]) return -1;
			if (a[nameKey] > b[nameKey]) return 1;
			return 0;
		})
		.map(option => (
			<MenuItem key={option[nameKey]} value={option[nameKey]}>
				{option[nameKey]}
			</MenuItem>
		));

	if (defaultSelection) {
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
	}
	return null;
};

export default Selector;
