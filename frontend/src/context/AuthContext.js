import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export default AuthContext;

function setUserObject(user) {
	if (!user) {
		return null;
	}
	const { username, email, user_id, active_band_id, active_tour_id } = user;
	return {
		username,
		id: user_id,
		email,
		active_band_id,
		active_tour_id,
	};
}

export const AuthProvider = ({ children }) => {
	const BASE_URL = 'http://127.0.0.1:8000/api/auth';
	const userToken = JSON.parse(localStorage.getItem('token'));
	const decodedUser = userToken ? jwtDecode(userToken) : null;

	const [token, setToken] = useState(userToken);
	const [user, setUser] = useState(setUserObject(decodedUser));
	const [isServerError, setIsServerError] = useState(false);

	const navigate = useNavigate();

	const registerUser = async registerData => {
		try {
			const { username, password, email } = registerData;
			let finalData = {
				username,
				password,
				email,
			};
			let response = await axios.post(`${BASE_URL}/register/`, finalData);
			if (response.status === 201) {
				console.log('Successful registration! Log in to access token');
				setIsServerError(false);
				navigate('/login');
			} else {
				navigate('/register');
			}
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const loginUser = async loginData => {
		try {
			let response = await axios.post(`${BASE_URL}/login/`, loginData);
			if (response.status === 200) {
				localStorage.setItem('token', JSON.stringify(response.data.access));
				setToken(JSON.parse(localStorage.getItem('token')));
				let loggedInUser = jwtDecode(response.data.access);
				setUser(setUserObject(loggedInUser));
				setIsServerError(false);
				navigate('/');
			} else {
				navigate('/register');
			}
		} catch (error) {
			console.log(error.response.data);
			setIsServerError(true);
			navigate('/register');
		}
	};

	const logoutUser = () => {
		if (user) {
			localStorage.removeItem('token');
			setUser(null);
			setToken(null);
			navigate('/');
		}
	};

	const contextData = {
		user,
		config: { headers: { Authorization: `Bearer ${token}` } },
		loginUser,
		logoutUser,
		registerUser,
		isServerError,
	};

	return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};
