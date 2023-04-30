import { Autocomplete, Button, MenuItem, Select, Stack, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useContacts from 'hooks/useContacts.js';
import useCustomForm from 'hooks/useCustomForm.js';
import useDates from 'hooks/useDates.js';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useEffect, useState } from 'react';

const AddContactBtnForm = ({ onSubmit }) => {
	const [options, setOptions] = useState([]);
	const { formData, handleChange, reset } = useCustomForm({ title: '', contact: '' });

	const { addDateContact } = useDates();

	function handleSubmit() {
		if (typeof formData.contact === 'string') formData.contact = { name: formData.contact };
		addDateContact(formData, onSubmit);
	}

	const { fetchUserContacts } = useContacts();

	// const methodOptions = options.map((option, i) => (
	// 	<MenuItem key={`method-option-${i}`} value={option}>
	// 		{option}
	// 	</MenuItem>
	// ));

	return (
		<ButtonForm
			onOpen={() => fetchUserContacts(setOptions)}
			btnText='Add Contact'
			onSubmit={handleSubmit}
		>
			<Stack spacing={1}>
				<TextField
					label='Title'
					name='title'
					value={formData.title}
					onChange={handleChange}
					required
				/>
				<Autocomplete
					autoSelect
					freeSolo
					options={options}
					getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
					value={formData.contact}
					onChange={(e, newVal) => handleChange({ target: { name: 'contact', value: newVal } })}
					renderInput={(params) => <TextField required {...params} label='Contact' />}
					noOptionsText='Create New Contact'
				/>
			</Stack>
		</ButtonForm>
	);
};

export default AddContactBtnForm;
