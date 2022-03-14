import React, { useEffect, useState } from 'react';
import { Button, Divider, Stack } from '@mui/material';
import MemberField from './MemberField.jsx';
import { MEMBER } from 'constants/roles.js';

const memberTemplate = { email: '', role: MEMBER, displayName: '' };

const MembersForm = ({ bandForm, setBandForm }) => {
	const [members, setMembers] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		const newMembers = [...members, memberTemplate];
		setMembers(newMembers);
	};

	const handleChange = (i, email, role) => {
		const newMembers = [...members];
		newMembers[i] = { email, role };
		setMembers(newMembers);
	};

	useEffect(() => {
		setBandForm({ ...bandForm, members });
	}, [members]);

	const memberFields = members.map((member, i) => (
		<MemberField key={i} i={i} value={members[i].email} onChange={handleChange} />
	));

	return (
		<form onSubmit={handleSubmit}>
			<Stack spacing={2} marginY={2}>
				{memberFields}
				<Button type='submit' size='small' variant='text' color='info' fullWidth>
					Invite Another Member
				</Button>
				<Divider />
			</Stack>
		</form>
	);
};

export default MembersForm;
