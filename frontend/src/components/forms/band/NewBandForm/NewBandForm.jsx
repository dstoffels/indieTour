import { TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import React, { useState } from 'react';

const NewBandForm = ({}) => {
	const [name, setName] = useState('');

	const { createNewBand } = useBand();

	const handleName = (e) => setName(e.target.value);

	const handleSubmit = () => {
		createNewBand({ name });
		setName('');
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
