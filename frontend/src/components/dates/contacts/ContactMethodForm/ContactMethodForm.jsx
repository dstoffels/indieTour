import { Autocomplete, Box, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useContacts from 'hooks/useContacts.js';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useEffect, useState } from 'react';
import MethodAutocomplete from '../MethodAutocomplete/MethodAutocomplete.jsx';

const ContactMethodForm = ({ contact_id, onChange }) => {
	const [options, setOptions] = useState([]);

	const { formData, handleChange, reset } = useCustomForm({ method: '', value: '' });

	const { fetchContactMethodOptions, addContactMethod } = useContacts();

	useEffect(() => {
		fetchContactMethodOptions((data) => {
			setOptions(data);
			handleChange({ target: { name: 'method', value: data[0] } });
		});
	}, []);

	const handleSubmit = () => {
		addContactMethod(contact_id, formData, onChange);
	};

	return (
		<ButtonForm btnText='Add Contact Method' onSubmit={handleSubmit}>
			<MethodAutocomplete value={formData.method} onChange={handleChange} />
			<TextField
				fullWidth
				label={formData.method}
				name='value'
				value={formData.value}
				onChange={handleChange}
			/>
		</ButtonForm>
	);
};

export default ContactMethodForm;
