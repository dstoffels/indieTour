import { LocationOn } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const DirectionsBtn = ({ location }) => {
	const handleClick = e => {
		e.stopPropagation();
		console.log('get directions');
	};

	if (location) {
		return (
			<Button color='primary' onClick={handleClick}>
				<LocationOn fontSize='large' />
			</Button>
		);
	}
	return null;
};

export default DirectionsBtn;
