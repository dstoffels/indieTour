import { Divider, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddMembersForm from './AddMembersForm.jsx';
import CreateBandBtn from './CreateBandBtn.jsx';

export const NEW_BAND_FORM_ID = 'new-band-form';

const NewBandForm = props => {
	const initialState = { name: '', members: [] };
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState('');

	const handleName = e => setForm({ ...form, name: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		const members = [...form.members];
		const lastIndex = members.length - 1;
		!members[lastIndex].email && members.pop();
	};

	return (
		<div className='w-100 bg-med-grey m-auto p-2'>
			<h5>New Band</h5>
			<form id={NEW_BAND_FORM_ID} onSubmit={handleSubmit}>
				<Divider />
				<Stack spacing={2} marginTop={2}>
					<TextField
						autoFocus
						color='success'
						label='Band/Artist Name'
						value={form.name}
						onChange={handleName}
						InputLabelProps={{ sx: { color: 'white' } }}
						InputProps={{ sx: { color: 'white' } }}
					/>
					<i className='text-danger'>{error}</i>
				</Stack>
			</form>

			<AddMembersForm bandForm={form} setBandForm={setForm} />
			<Divider />
			<CreateBandBtn />
		</div>
	);
};

export default NewBandForm;
