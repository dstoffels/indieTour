import { getConfigObj, loginUser, logoutUser, registerUser } from 'redux/userSlice.js';
import useStore from './useStore.js';

const useAuth = () => {
	const { store, dispatch } = useStore();

	const login = credentials => dispatch(loginUser(credentials));
	const logout = () => dispatch(logoutUser());
	const register = userInfo => dispatch(registerUser(userInfo));
	const config = getConfigObj();

	return { user: store.user, config, login, logout, register };
};

export default useAuth;
