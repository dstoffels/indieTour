import React from 'react';
import { Clear } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const RemoveTourDateBtn = ({ i, tourDates, setTourDates }) => {
	const handleClick = () => {
		tourDates.splice(i, 1);
		setTourDates([...tourDates]);
	};
	return (
		<IconButton onClick={handleClick} size='small' color='error'>
			<Clear />
		</IconButton>
	);
};

export default RemoveTourDateBtn;
