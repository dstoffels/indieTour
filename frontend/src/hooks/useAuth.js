import { useNavigate } from 'react-router-dom';
import { getToken, loginUser, logoutUser, registerUser } from 'redux/userSlice.js';
import useStore from './useStore.js';

const useAuth = () => {
	const { store, dispatch } = useStore();
	const navigate = useNavigate();

	const login = credentials => dispatch(loginUser(credentials));
	const logout = () => dispatch(logoutUser());
	const register = userInfo => dispatch(registerUser(userInfo));

	const config = { headers: { Authorization: `Bearer ${getToken()}` } };

	return { user: store.user, config, login, logout, register };
};

export default useAuth;
