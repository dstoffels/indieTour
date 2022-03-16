import { Button } from '@mui/material';
import React from 'react';
import useBands from '../useBands.js';

const DeleteBandBtn = props => {
	const { deleteBand } = useBands();
	const handleClick = () => deleteBand();
	return (
		<Button fullWidth color='error' variant='contained' onClick={handleClick}>
			CONFIRM DELETION
		</Button>
	);
};

export default DeleteBandBtn;
