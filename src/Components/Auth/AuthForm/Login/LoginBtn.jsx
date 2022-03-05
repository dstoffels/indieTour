import { Button } from '@mui/material';
import React from 'react';
import { LOGIN_FORM_ID } from '../../constants.js';

const LoginBtn = () => (
	<Button form={LOGIN_FORM_ID} type='submit' size='large' variant='contained'>
		LOG IN
	</Button>
);

export default LoginBtn;
