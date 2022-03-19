import { Card, CardContent, Typography } from '@mui/material';
import { MEMBER } from 'constants/roles.js';
import React from 'react';

const MemberCard = ({ member }) => {
	const role = member.role !== MEMBER ? ` (${member.role})` : '';
	return (
		<Card className='d-flex'>
			<CardContent className='p-2'>
				<Typography>{`${member.displayName + role}`}</Typography>
				<Typography variant='caption'> {member.email} </Typography>
			</CardContent>
		</Card>
	);
};

export default MemberCard;
