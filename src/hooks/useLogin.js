import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONSOLE } from '../constants/routes.js';
import useUser from './useUser.js';

const useLogin = () => {
	const navigate = useNavigate();
	const user = useUser();

	useEffect(() => {
		Boolean(user) && navigate(CONSOLE);
	}, [user]);
};

export default useLogin;
