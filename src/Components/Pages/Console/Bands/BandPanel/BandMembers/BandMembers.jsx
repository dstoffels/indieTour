import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { MEMBER } from 'constants/roles.js';
import React, { useState } from 'react';
import useBands from '../../useBands.js';

const BandMembers = props => {
	const [expanded, setExpanded] = useState(false);

	const { members } = useBands();

	const handleChange = panel => (e, isExpanded) => setExpanded(isExpanded ? panel : false);

	const bandMembers = members.map(({ displayName, email, role }, i, members) => (
		<div key={email}>
			<ListItem sx={{ flexDirection: 'column', alignItems: 'start' }}>
				<span>
					<Typography variant=''>{displayName}</Typography>
					<Typography variant='caption'>{role !== MEMBER && ` (${role})`}</Typography>
				</span>

				<Typography variant='caption'>{email}</Typography>
			</ListItem>
			{i !== members.length - 1 && <Divider />}
		</div>
	));

	return (
		<div>
			<Stack spacing={2}>
				<h6 className='panel-header'>Members</h6>
				<Box marginTop='0 !important' sx={{ bgcolor: 'background.paper' }}>
					<List>{bandMembers}</List>
				</Box>
			</Stack>
		</div>
	);
};

export default BandMembers;
