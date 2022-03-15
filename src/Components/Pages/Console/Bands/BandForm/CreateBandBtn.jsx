import { Button } from '@mui/material';
import React from 'react';
import { NEW_BAND_FORM_ID } from '../NewBandModal/NewBandModal.jsx';
const CreateBandBtn = props => {
	return (
		<Button form={NEW_BAND_FORM_ID} type='submit' fullWidth color='success' variant='contained'>
			CREATE BAND & SEND INVITATIONS
		</Button>
	);
};

export default CreateBandBtn;
