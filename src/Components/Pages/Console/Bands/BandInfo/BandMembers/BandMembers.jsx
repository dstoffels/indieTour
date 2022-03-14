import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { membersPath } from 'constants/restPaths.js';
import { authHeader } from 'fb/firebase.js';
import useUser from 'hooks/useUser.js';
import React, { useEffect, useState } from 'react';
import MemberAccordion from '../BandMember/MemberAccordion.jsx';

// TODO: move: add members btn to component
// TODO: bld: add members form, must be reusable to display

const BandMembers = props => {
	const { user } = useUser();
	const [expanded, setExpanded] = useState(false);
	const [members, setMembers] = useState([]);

	useEffect(async () => {
		let cancel = false;
		const headers = await authHeader();
		const response = await axios.get(membersPath(user.activeMember.bandPath), headers);

		!cancel && setMembers(response.data);
		return () => {
			cancel = true;
		};
	}, []);

	const handleChange = panel => (e, isExpanded) => setExpanded(isExpanded ? panel : false);

	const bandMembers = members.map(member => (
		<MemberAccordion
			key={member.email}
			member={member}
			expanded={expanded}
			onChange={handleChange}
		/>
	));

	return (
		<div>
			<Stack marginY={2} spacing={2}>
				<h5>Band Members</h5>
				<div>{bandMembers}</div>
				<Button size='large' color='success' variant='contained' className='mobile-max-w mx-auto'>
					ADD MEMBERS
				</Button>
			</Stack>
		</div>
	);
};

export default BandMembers;
