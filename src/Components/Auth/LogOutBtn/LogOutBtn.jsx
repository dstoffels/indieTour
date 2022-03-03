import { Button } from '@mui/material';
import React from 'react';
import { logOut } from '../../../firebase/firebase.js';

const LogOutBtn = props => {
	return <Button onClick={logOut}>LOG OUT</Button>;
};

export default LogOutBtn;
