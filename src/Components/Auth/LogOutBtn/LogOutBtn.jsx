import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes.js';
import { logOut } from '../../../firebase/firebase.js';

const LogOutBtn = props => {
	const navigate = useNavigate();
	const handleClick = () => {
		logOut();
		navigate(HOME);
	};
	return <Button onClick={handleClick}>LOG OUT</Button>;
};

export default LogOutBtn;
