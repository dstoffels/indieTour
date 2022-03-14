import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
<<<<<<< Updated upstream
<<<<<<< HEAD
import { DATES } from '../constants/routes.js';
import { fetchUserBands } from '../Redux/bandsSlice.js';
=======
import { fetchUserBands } from '../redux/bandsSlice.js';
>>>>>>> console
=======
<<<<<<< Updated upstream
import { DATES } from '../constants/routes.js';
import { fetchUserBands } from '../Redux/bandsSlice.js';
=======
import { fetchUserBands } from '../Components/Pages/Console/Bands/bandsSlice.js';
>>>>>>> Stashed changes
>>>>>>> Stashed changes
import useUser from './useUser.js';

//**Fetches user's data with a single action */
const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useUser();
	const { prevPage } = useSelector(state => state.nav);

	useEffect(() => {
		if (user) {
			navigate(prevPage);
			// dispatch(fetchUserBands());
		}
	}, [user]);
};

export default useLogin;
