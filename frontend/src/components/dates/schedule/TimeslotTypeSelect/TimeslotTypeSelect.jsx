import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import useDates from 'hooks/useDates.js';
import React, { useState, useEffect } from 'react';

const TimeslotTypeSelect = ({ value, onChange }) => {
	const [types, setTypes] = useState([]);

	const { fetchTimeslotTypes } = useDates();

	useEffect(() => {
		fetchTimeslotTypes(setTypes);
	}, []);

	const options = types.map((type) => (
		<MenuItem key={`timeslot-type-${type}`} value={type}>
			{type}
		</MenuItem>
	));

	return (
		types.length && (
			<FormControl>
				<InputLabel>Type</InputLabel>
				<Select label='type' name='type' value={value} onChange={onChange}>
					{options}
				</Select>
			</FormControl>
		)
	);
};

export default TimeslotTypeSelect;
