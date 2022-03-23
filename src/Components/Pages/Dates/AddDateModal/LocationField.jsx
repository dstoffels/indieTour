import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { placesPath } from 'utils/restPaths.js';
import { eventBldr } from './AddDateForm.jsx';

const LocationField = ({ value, onChange, openOnStart = true, size }) => {
	const [open, setOpen] = useState(openOnStart && Boolean(value));
	const [options, setOptions] = useState([]);

	const queryPlaces = async () => {
		if (openOnStart && value) {
			setOpen(true);
			const response = await axios.get(placesPath(value));
			const locations = response.data.results.map(
				({ name, formatted_address, business_status }) =>
					`${business_status ? name + ': ' : ''}${formatted_address}`,
			);
			setOptions(locations);
		}
		openOnStart = true;
	};

	const handleChange = (_e, newVal) => {
		onChange(eventBldr('location', newVal));
	};

	useEffect(async () => {
		await queryPlaces();
	}, [value]);

	return (
		<Autocomplete
			open={open}
			onBlur={() => setOpen(false)}
			autoHighlight
			onFocus={queryPlaces}
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
