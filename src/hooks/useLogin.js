import { CONSOLE, DATES } from 'constants/routes.js';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser.js';

//**Fetches user's data with a single action */
const useLogin = () => {
	const navigate = useNavigate();
	const { user } = useUser();

	useEffect(() => {
		if (user) {
			navigate(DATES);
		}
	}, [user]);
};

export default useLogin;
