import { Autocomplete, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import React, { useState } from 'react';

const AddUserForm = ({ forTour, users = [] }) => {
	const [email, setEmail] = useState('');
	const handleEmail = (e) => setEmail(e.target.value);

	const { addBandUser, isAdmin, bandusers } = useBand();
	const { addTouruser } = useTour();

	const handleSubmit = async () => {
		forTour ? addTouruser(email) : addBandUser(email);
		setEmail('');
	};

	const userEmails = forTour
		? bandusers
				.map(({ email }) => email)
				.filter((email) => !users.map(({ email }) => email).includes(email))
		: [];

	return isAdmin ? (
		<ButtonForm
			onSubmit={handleSubmit}
			btnText='Add Member'
			info='Accounts are created for new users.'
		>
			{forTour ? (
				<Autocomplete
					value={email}
					onSelect={handleEmail}
					freeSolo
					autoSelect
					fullWidth
					options={userEmails}
					renderInput={(params) => (
						<TextField
							variant='standard'
							required
							{...params}
							label='Email'
							value={email}
							onChange={handleEmail}
						/>
					)}
				/>
			) : (
				<TextField
					variant='standard'
					required
					autoFocus
					fullWidth
					label='Email'
					type='email'
					value={email}
					onChange={handleEmail}
				/>
			)}
		</ButtonForm>
	) : null;
};

export default AddUserForm;
