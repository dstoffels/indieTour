import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import { Edit } from '@mui/icons-material';
import withAdmin from 'Components/Auth/Authorization/withAdmin.jsx';
import useModal from 'Components/Common/MainModal/useModal.js';

const EditBandModalBtn = props => {
	const { openMainModal, modalKeys } = useModal();
	const handleClick = () => openMainModal(modalKeys.editBand);

	return (
		<Tooltip title='Edit band & manage members'>
			<Fab color='warning' size='small' onClick={handleClick} className='me-3'>
				<Edit />
			</Fab>
		</Tooltip>
	);
};

export default withAdmin(EditBandModalBtn);
