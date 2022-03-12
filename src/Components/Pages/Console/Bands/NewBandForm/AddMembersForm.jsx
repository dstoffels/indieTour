import React, { useEffect, useState } from 'react';
import { Button, Divider, Stack } from '@mui/material';
import { MEMBER } from '../../../../../constants/roles.js';
import MemberField from './MemberField.jsx';

const memberTemplate = { email: '', role: MEMBER, displayName: '' };

const AddMembersForm = ({ bandForm, setBandForm }) => {
	const [members, setMembers] = useState([memberTemplate]);

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
				<Button type='submit' size='small' variant='contained' fullWidth>
					Add Member
				</Button>
				<Divider />
			</Stack>
		</form>
	);
};

export default AddMembersForm;
