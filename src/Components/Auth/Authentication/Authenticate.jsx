import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HOME, LOGIN, WAITING_ROOM } from '../../../constants/routes.js';
import { auth } from '../../../firebase/firebase.js';
import useUser from '../../../hooks/useUser.js';

const Authenticate = ({ children }) => {
	const navigate = useNavigate();
	const user = useUser();

	const verifyCurrentUser = () => {
		if (!user) {
			navigate(HOME);
			return null;
		}

		if (!user.emailVerified) {
			navigate(WAITING_ROOM);
			return null;
		}
	};

	useEffect(verifyCurrentUser, [user, verifyCurrentUser]);

	return children;
};

export default Authenticate;
