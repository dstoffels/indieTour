import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DATES } from '../constants/routes.js';
import useUser from './useUser.js';

const useLogin = () => {
	const navigate = useNavigate();
	const user = useUser();

	useEffect(() => {
		Boolean(user) && navigate(DATES);
	}, [user]);
};

export default useLogin;
