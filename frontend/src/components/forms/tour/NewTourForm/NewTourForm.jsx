import { TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useTour from 'hooks/useTour.js';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTourForm = ({}) => {
	const [name, setName] = useState('');

	const { createNewTour } = useTour();
	const navigate = useNavigate();

	const handleName = (e) => setName(e.target.value);

	const handleSubmit = async () => {
		createNewTour({ name });
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
