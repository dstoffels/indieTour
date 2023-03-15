import { AccountCircle } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import AddUserForm from '../AddUserForm/AddUserForm.jsx';

const AddUsers = ({ users, setUsers, forTour = false }) => {
	const handleClick = () => {
		const newUser = {
			email: '',
			is_admin: false,
		};

		setUsers([...users, newUser]);
	};

	const userForms = users.map((user, i) => (
		<AddUserForm
			key={`userForm-${i}`}
			user={user}
			users={users}
			setUsers={setUsers}
			i={i}
			forTour={forTour}
		/>
	));

	return (
		<Stack spacing={1}>
			{userForms}
			<Button onClick={handleClick} startIcon={<AccountCircle />}>
				Add User
			</Button>
		</Stack>
	);
};

export default AddUsers;
