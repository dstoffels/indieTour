import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { placesPath } from 'utils/restPaths.js';

const LocationField = ({
	value,
	name = 'location',
	label = 'Location',
	onChange,
	openOnStart = true,
	size,
}) => {
	const [open, setOpen] = useState(openOnStart && Boolean(value));
	const [focused, setFocused] = useState(false);
	const [options, setOptions] = useState([]);

	const queryPlaces = async () => {
		if (value && focused) {
			setOpen(true);
			const response = await axios.get(placesPath(value));
			const locations = response.data.results.map(
				({ name, formatted_address, business_status }) =>
					`${business_status ? name + ': ' : ''}${formatted_address}`,
			);
			setOptions(locations);
		} else {
			setOpen(false);
			setOptions([]);
		}
	};

	const handleFocus = () => setFocused(true);

	useEffect(() => {
		queryPlaces();
	}, [value]);

	return (
		<Autocomplete
			open={open}
			onBlur={() => {
				setFocused(false);
				setOpen(false);
			}}
			autoHighlight
			onFocus={handleFocus}
			value={value}
			freeSolo
			options={options}
			ListboxProps={{ onClick: () => setOpen(false) }}
			renderInput={params => (
				<TextField
					{...params}
					label={label}
					size={size}
					name={name}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	);
};

export default LocationField;
