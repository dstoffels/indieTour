import { Check, Close, DeleteForever } from '@mui/icons-material';
import {
	Autocomplete,
	Button,
	FormControlLabel,
	IconButton,
	Switch,
	TextField,
} from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import useBand from 'hooks/useBand.js';
import useEnterKey from 'hooks/useEnterKey.js';
import useEscKey from 'hooks/useEscKey.js';
import React, { useEffect, useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const AddUserForm = ({ forTour, bandUsers = [] }) => {
	const [isActive, setIsActive] = useState(false);
	const [email, setEmail] = useState('');
	const [is_admin, setIsAdmin] = useState(false);

	useEffect(() => {
		setEmail('');
		setIsAdmin(false);
	}, [isActive]);

	const { isAdmin, activeBand, fetchActiveBand } = useBand();

	useEscKey(() => setIsActive(false));

	const handleEmail = e => setEmail(e.target.value);
	const handleAdmin = e => setIsAdmin(e.target.checked);
	const handleActive = () => setIsActive(!isActive);
	console.log(is_admin);

	const handleSubmit = async e => {
		e.preventDefault();
		const config = getConfigObj();
		await axios.post(endpoints.bandusers(activeBand.id), { email, is_admin }, config);
		fetchActiveBand();
		handleActive();
	};

	const userEmails = forTour ? bandUsers.map(({ email }) => email) : [];

	return isActive ? (
		<form onSubmit={handleSubmit} autoComplete='off'>
			<Stack direction='row' spacing={1} justifyContent='space-between'>
				{forTour ? (
					<Autocomplete
						value={email}
						onSelect={handleEmail}
						freeSolo
						autoSelect
						fullWidth
						options={userEmails}
						renderInput={params => (
							<form autoComplete='off'>
								<TextField
									required
									{...params}
									label='Email'
									value={email}
									onChange={handleEmail}
								/>
							</form>
						)}
					/>
				) : (
					<TextField
						variant='standard'
						required
						label='Email'
						type='email'
						value={email}
						onChange={handleEmail}
					/>
				)}
				<FormControlLabel
					control={<Switch checked={is_admin} onChange={handleAdmin} />}
					label='Admin'
				/>
				<Stack direction='row' alignItems='center'>
					<IconButton color='info' variant='contained' type='submit'>
						<Check />
					</IconButton>
					<IconButton onClick={handleActive} color='error'>
						<Close />
					</IconButton>
				</Stack>
			</Stack>
		</form>
	) : (
		isAdmin && (
			<Button color='info' onClick={handleActive}>
				Add Member
			</Button>
		)
	);
};

export default AddUserForm;
