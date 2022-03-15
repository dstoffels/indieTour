import React from 'react';
import { IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import useBands from '../useBands.js';

const EditBandModalBtn = props => {
	const { openEditBandModal } = useBands();
	const handleClick = () => openEditBandModal();

	return (
		<span className='ms-3'>
			<IconButton onClick={handleClick}>
				<Edit />
			</IconButton>
		</span>
	);
};

export default EditBandModalBtn;
