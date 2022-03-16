import React from 'react';
import { Button, Fab, IconButton, Tooltip } from '@mui/material';
import { BorderAll, Edit } from '@mui/icons-material';
import useBands from '../useBands.js';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';

const EditBandModalBtn = props => {
	const { openEditBandModal } = useBands();
	const handleClick = () => openEditBandModal();

	return (
		<Tooltip title='Edit Band'>
			<IconButton color='warning' size='large' onClick={handleClick} className='ms-3'>
				<Edit />
			</IconButton>
		</Tooltip>
	);
};

export default withAdmin(EditBandModalBtn);
