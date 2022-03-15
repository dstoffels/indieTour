import { Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const RemoveMemberBtn = ({ i, members, setMembers }) => {
	const handleClick = () => {
		members.splice(i, 1);
		setMembers([...members]);
	};
	return (
		<IconButton onClick={handleClick}>
			<Clear sx={{ color: 'red !important' }} />
		</IconButton>
	);
};

export default RemoveMemberBtn;
