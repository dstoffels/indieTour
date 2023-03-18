import { Autocomplete, TextField } from '@mui/material';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import React, { useState } from 'react';

const AddUserForm = ({ onSubmit, isAdmin, forTour, users = [], bandUsers = [] }) => {
	const [email, setEmail] = useState('');
	const handleEmail = e => setEmail(e.target.value);

	const clearForm = () => {
		setEmail('');
	};

	const handleSubmit = async () => {
		onSubmit({ email });
		clearForm();
	};

	const userEmails = forTour
		? bandUsers
				.map(({ email }) => email)
				.filter(email => !users.map(({ email }) => email).includes(email))
		: [];

	return isAdmin ? (
		<ButtonForm
			onSubmit={handleSubmit}
			btnText='Add Member'
			info='Accounts are created for new users.'>
			{forTour ? (
				<Autocomplete
					value={email}
					onSelect={handleEmail}
					freeSolo
					autoSelect
					fullWidth
					options={userEmails}
					renderInput={params => (
						<TextField required {...params} label='Email' value={email} onChange={handleEmail} />
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
