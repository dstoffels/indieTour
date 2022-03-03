import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SIGN_IN, WAITING_ROOM } from '../../../constants/routes.js';

const Authenticate = ({ children }) => {
	const navigate = useNavigate();
	const { user } = useSelector(state => state);

	const auth = () => {
		if (!user) {
			navigate(SIGN_IN);
			return null;
		}

		if (!user.emailVerified) {
			navigate(WAITING_ROOM);
			return null;
		}
	};

	useEffect(() => {
		return auth();
	}, []);

	return children;
};

export default Authenticate;
