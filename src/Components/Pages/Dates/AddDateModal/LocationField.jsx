import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { eventBldr } from 'utils/helpers.js';
import { placesPath } from 'utils/restPaths.js';

const LocationField = ({ value, onChange, openOnStart = true, size }) => {
	const [open, setOpen] = useState(openOnStart && Boolean(value));
	const [options, setOptions] = useState([]);

	const queryPlaces = async () => {
		if (value) {
			const response = await axios.get(placesPath(value));
			const locations = response.data.results.map(
				({ name, formatted_address, business_status }) =>
					`${business_status ? name + ': ' : ''}${formatted_address}`,
			);
			setOptions(locations);
		}
	};

	const handleFocus = async () => {
		await queryPlaces();
		setOpen(true);
	};

	const handleChange = (_e, newVal) => onChange(eventBldr('location', newVal));

	useEffect(async () => {
		await queryPlaces();
	}, [value]);

	return (
		<Autocomplete
			open={open}
			onBlur={() => setOpen(false)}
			autoHighlight
			onFocus={handleFocus}
			value={value}
			freeSolo
			onChange={handleChange}
			options={options}
			renderInput={params => (
				<TextField
					{...params}
					label='Location'
					multiline
					size={size}
					name='location'
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	);
};

export default LocationField;
