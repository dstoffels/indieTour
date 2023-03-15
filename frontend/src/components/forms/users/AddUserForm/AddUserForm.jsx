import { DeleteForever } from '@mui/icons-material';
import { Autocomplete, FormControlLabel, IconButton, Switch, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import useBand from 'hooks/useBand.js';
import React from 'react';

const AddUserForm = ({ user, users, setUsers, i, forTour }) => {
	const bandUsers = useBand().activeBand.users;

	const setUser = newUser => {
		const newUsers = [...users];
		newUsers[i] = newUser;
		setUsers(newUsers);
	};

	const handleEmail = e => setUser({ ...user, email: e.target.value });
	const handleAdmin = e => setUser({ ...user, is_admin: e.target.checked });

	const handleDelete = () => {
		const newUsers = [...users];
		newUsers.splice(i, 1);
		setUsers(newUsers);
	};

	const userEmails = forTour ? bandUsers.map(({ email }) => email) : [];

	return (
		user && (
			<Stack direction='row' spacing={1} justifyContent='space-between'>
				{forTour ? (
					<Autocomplete
						value={user.email}
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
									value={user.email}
									onChange={handleEmail}
								/>
							</form>
						)}
					/>
				) : (
					<TextField
						required
						label='Email'
						type='email'
						value={user.email}
						onChange={handleEmail}
					/>
				)}
				<FormControlLabel
					control={<Switch checked={user.is_admin} onChange={handleAdmin} />}
					label='Admin'
				/>
				<Stack direction='row' alignItems='center'>
					<IconButton onClick={handleDelete} color='error'>
						<DeleteForever />
					</IconButton>
				</Stack>
			</Stack>
		)
	);
};

export default AddUserForm;
