import { useNavigate } from 'react-router-dom';
// import { loginUser, logoutUser, registerUser } from 'redux/userSlice.js';
import useAPI from './useAPI.js';
import jwtDecode from 'jwt-decode';

const getAccessToken = () => {
	const tokenPair = JSON.parse(localStorage.getItem('token'));
	return tokenPair ? tokenPair.access : null;
};

export const getUserObjectFromToken = () => {
	const userToken = getAccessToken();

	if (!userToken) return null;
	const { username, email, user_id, is_active } = jwtDecode(userToken);
	return {
		id: user_id,
		email,
		username,
		is_active,
	};
};

const getRefreshToken = () => JSON.parse(localStorage.getItem('token').refresh);

const setTokenPair = jwt => localStorage.setItem('token', JSON.stringify(jwt));

const setAccessToken = accessToken =>
	setTokenPair({ refresh: getRefreshToken(), access: accessToken });

export const useJWT = () => {
	return { headers: { Authorization: `Bearer ${getAccessToken()}` } };
};

const useAuth = () => {
	const navigate = useNavigate();
	const { auth } = useAPI();

	const user = getUserObjectFromToken();

	const login = async credentials => {
		const response = await auth.login.post(credentials);
		setTokenPair(response.data);
		navigate('/');
	};
	const logout = () => {
		localStorage.removeItem('token');
		navigate('/');
	};
	const register = async formData => {
		const response = await auth.register.post(formData);
		if (response.status === 201) {
			const { email, password } = formData;
			login({ email, password });
		}
	};

	return { user, login, logout, register };
};

export default useAuth;
