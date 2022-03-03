import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN } from '../../../constants/routes.js';

const LoginBtn = props => {
	const navigate = useNavigate();

	const handleClick = () => navigate(SIGN_IN);
	return <Button onClick={handleClick}>LOGIN</Button>;
};

export default LoginBtn;
