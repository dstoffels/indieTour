import { Autocomplete, Button, MenuItem, Select, Stack, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
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

	return (
		<ButtonForm
			onOpen={() => fetchUserContacts(setOptions)}
			btnText='Add Contact'
			onSubmit={handleSubmit}
		>
			<SideStack padding={0} spacing={1}>
				<Autocomplete
					autoSelect
					fullWidth
					freeSolo
					options={options}
					getOptionLabel={(option) => (typeof option === 'string' ? option : option.name)}
					value={formData.contact}
					onChange={(e, newVal) => handleChange({ target: { name: 'contact', value: newVal } })}
					renderInput={(params) => <TextField autoFocus required {...params} label='Contact' />}
					noOptionsText='Create New Contact'
				/>
				<TextField
					fullWidth
					label='Title'
					name='title'
					value={formData.title}
					onChange={handleChange}
					required
				/>
			</SideStack>
		</ButtonForm>
	);
};

export default AddContactBtnForm;
