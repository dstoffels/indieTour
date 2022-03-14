import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useUser from './useUser.js';

//**Fetches user's data with a single action */
const useLogin = () => {
	const navigate = useNavigate();
	const { user } = useUser();
	const { prevPage } = useSelector(state => state.nav);

	useEffect(() => {
		if (user) {
			navigate(prevPage);
		}
	}, [user]);
};

export default useLogin;
