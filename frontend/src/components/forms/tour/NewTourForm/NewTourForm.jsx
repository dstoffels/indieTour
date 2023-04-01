import { TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useAPI from 'hooks/useAPI.js';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTourForm = ({}) => {
	const [name, setName] = useState('');
	const api = useAPI();

	const { activeBand, fetchActiveBand } = useBand();
	const { createNewTour } = useTour();
	const navigate = useNavigate();

	const handleName = e => setName(e.target.value);

	const handleSubmit = async () => {
		createNewTour({ name });
		fetchActiveBand();
		setName('');
		// navigate('/tour');
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
