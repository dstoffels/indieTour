import { Divider, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import MembersForm from '../NewBand/MembersForm/MembersForm.jsx';
import CreateBandBtn from '../NewBand/CreateBandBtn.jsx';
import axios from 'axios';
import { BANDS_PATH } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';
import { useDispatch } from 'react-redux';
import useUser from 'hooks/useUser.js';

export const NEW_BAND_FORM_ID = 'new-band-form';

const NewBandForm = props => {
	const { selectBand } = useUser();
	const initialState = { name: '', members: [] };
	const [form, setForm] = useState(initialState);
	const [error, setError] = useState('');

	const handleName = e => setForm({ ...form, name: e.target.value });

	const handleSubmit = async e => {
		e.preventDefault();
		const members = [...form.members];
		const lastIndex = members.length - 1;
		!members[lastIndex]?.email.includes('@') && members.pop();
		const headers = await authHeader();
		const response = await axios.post(BANDS_PATH + '/new', form, headers);
		selectBand(response.data);
		setForm(initialState);
	};

	return (
		<div className='w-100 bg-med-grey p-2'>
			<h5>New Band</h5>
			<form id={NEW_BAND_FORM_ID} onSubmit={handleSubmit}>
				<Divider />
				<Stack spacing={2} marginTop={2}>
					<TextField
						autoFocus
						color='info'
						label='Band/Artist Name'
						value={form.name}
						onChange={handleName}
						InputLabelProps={{ sx: { color: 'white' } }}
						InputProps={{ sx: { color: 'white' } }}
					/>
					<i className='text-danger'>{error}</i>
				</Stack>
			</form>

			<Divider />
			<MembersForm bandForm={form} setBandForm={setForm} />
			<Divider />
			<CreateBandBtn />
		</div>
	);
};

export default NewBandForm;
