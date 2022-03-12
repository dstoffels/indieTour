import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserBands } from '../redux/bandsSlice.js';
import useUser from './useUser.js';

const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useUser();
	const { prevPage } = useSelector(state => state.nav);

	useEffect(() => {
		if (user) {
			navigate(prevPage);
			dispatch(fetchUserBands());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);
};

export default useLogin;
