import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/useUser.js';
import { HOME, WAITING_ROOM } from 'constants/routes.js';

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

		if (!user.hasValidPW) {
			navigate(WAITING_ROOM);
			console.log('make the set password page');
			return null;
		}
	};

	useEffect(verifyCurrentUser, [user]);

	return children;
};

export default Authenticate;
