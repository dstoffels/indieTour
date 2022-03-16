import React from 'react';
import { Fab, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';
import useBands from '../useBands.js';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';

const EditBandModalBtn = props => {
	const { openEditBandModal } = useBands();
	const handleClick = () => openEditBandModal();

	return (
		<Fab
			size='small'
			variant='extended'
			hidden={false}
			color='icon'
			onClick={handleClick}
			className='ms-5'>
			<Edit />
		</Fab>
	);
};

export default withAdmin(EditBandModalBtn);
