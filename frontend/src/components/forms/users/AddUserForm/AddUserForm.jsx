import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import ButtonForm from 'components/generic/ButtonForm/ButtonForm.jsx';
import useBand from 'hooks/useBand.js';
import useEscKey from 'hooks/useEscKey.js';
import React, { useEffect, useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const AddUserForm = ({ forTour, bandUsers = [] }) => {
	const [email, setEmail] = useState('');

	const { isAdmin, activeBand, fetchActiveBand } = useBand();

	const handleEmail = e => setEmail(e.target.value);

	const clearForm = () => {
		setEmail('');
	};

	const handleSubmit = async () => {
		const config = getConfigObj();
		await axios.post(endpoints.bandusers(activeBand.id), { email }, config);
		clearForm();
		fetchActiveBand();
	};

	const userEmails = forTour ? bandUsers.map(({ email }) => email) : [];

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
