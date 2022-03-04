import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN } from '../../../constants/routes.js';

const LoginBtn = props => {
	const navigate = useNavigate();

	const handleClick = () => navigate(LOGIN);

	return <Button onClick={handleClick}>LOGIN</Button>;
};

export default LoginBtn;
