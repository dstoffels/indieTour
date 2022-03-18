import { Box, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { MEMBER } from 'constants/roles.js';
import React from 'react';
import useBands from '../../useBands.js';

const BandMembers = props => {
	const { members } = useBands();

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
