import { TextField } from '@mui/material';
import axios from 'axios';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import useAPI from 'hooks/useAPI.js';
import React, { useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const NewBandForm = ({ onPost }) => {
	const [name, setName] = useState('');

	const requests = useAPI();

	const handleName = e => setName(e.target.value);

	const handleSubmit = async () => {
		const response = await requests.band.post({ name });
		onPost();
	};

	return (
		<ButtonForm onSubmit={handleSubmit} btnText='Create Band'>
			<TextField
				variant='standard'
				value={name}
				onChange={handleName}
				label='Band Name'
				required
				autoFocus
				fullWidth
			/>
		</ButtonForm>
	);
};

export default NewBandForm;
