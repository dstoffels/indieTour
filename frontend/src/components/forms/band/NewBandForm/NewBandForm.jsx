import { TextField } from '@mui/material';
import axios from 'axios';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import React, { useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const NewBandForm = ({}) => {
	const [name, setName] = useState('');

	const { fetchActiveBand, fetchUserBands } = useBand();

	const handleName = e => setName(e.target.value);

	const handleSubmit = async () => {
		const config = getConfigObj();
		try {
			await axios.post(endpoints.bands(), { name }, config);
			fetchActiveBand();
			fetchUserBands();
			setName('');
		} catch (error) {
			console.error(error.response.data);
		}
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
