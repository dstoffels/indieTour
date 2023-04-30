import { Autocomplete, TextField } from '@mui/material';
import useContacts from 'hooks/useContacts.js';
import React, { useState, useEffect } from 'react';

const MethodAutocomplete = ({ value, onChange }) => {
	const [options, setOptions] = useState([]);
	const { fetchContactMethodOptions, addContactMethod } = useContacts();

	const handleChange = (event, newValue) => {
		onChange({ target: { name: 'method', value: newValue } });
	};

	useEffect(() => {
		fetchContactMethodOptions((data) => {
			setOptions(data);
			handleChange('', value || data[0]);
		});
	}, []);

	return options ? (
		<Autocomplete
			fullWidth
			autoHighlight
			value={value}
			onChange={handleChange}
			options={options}
			renderInput={(params) => <TextField {...params} label='Method' />}
		/>
	) : null;
};

export default MethodAutocomplete;
