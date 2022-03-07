import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DATES } from '../constants/routes.js';
import useUser from './useUser.js';

const useLogin = () => {
	const navigate = useNavigate();
	const user = useUser();
	const { prevPage } = useSelector(state => state.nav);

	useEffect(() => {
		Boolean(user) && navigate(prevPage);
	}, [user]);
};

export default useLogin;
