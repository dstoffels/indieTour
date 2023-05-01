import { Autocomplete, Button, MenuItem, Select, Stack, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import useContacts from 'hooks/useContacts.js';
import useCustomForm from 'hooks/useCustomForm.js';
import useDates from 'hooks/useDates.js';
import usePlaces from 'hooks/usePlaces.js';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useEffect, useState } from 'react';

const AddContactBtnForm = ({ place_id, onSubmit }) => {
	const [options, setOptions] = useState([]);
	const { formData, handleChange, reset } = useCustomForm({ title: '', contact: '' });

	const { addPlaceContact } = usePlaces();

	function handleSubmit() {
		console.log(place_id);
		if (typeof formData.contact === 'string') formData.contact = { name: formData.contact };
		place_id && addPlaceContact(place_id, formData, onSubmit);
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
