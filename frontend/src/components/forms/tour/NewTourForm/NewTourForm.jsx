import { TextField } from '@mui/material';
import axios from 'axios';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const NewTourForm = ({}) => {
	const [name, setName] = useState('');

	const { activeBand, fetchActiveBand } = useBand();
	const navigate = useNavigate();

	const handleName = e => setName(e.target.value);

	const handleSubmit = async () => {
		const config = getConfigObj();
		try {
			await axios.post(endpoints.tours(activeBand.id), { name }, config);
			fetchActiveBand();
			setName('');
			navigate('/tour');
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return (
		<ButtonForm btnText='Add Tour' onSubmit={handleSubmit}>
			<TextField
				variant='standard'
				value={name}
				onChange={handleName}
				label='Tour Name'
				required
				autoFocus
				fullWidth
			/>
		</ButtonForm>
	);
};

export default NewTourForm;
