import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/useUser.js';
import { HOME, WAITING_ROOM } from 'constants/routes.js';

const Authenticate = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const navigate = useNavigate();
	const { user } = useUser();

	const verifyCurrentUser = () => {
		if (!user) {
			navigate(HOME);
			setAuthenticated(false);
			return null;
		}

		if (!user.emailVerified) {
			navigate(WAITING_ROOM);
			setAuthenticated(false);
			return null;
		}

		if (!user.hasValidPW) {
			navigate(WAITING_ROOM);
			setAuthenticated(false);
			console.log(`you need to make the set password page, that's why this is broken`);
			return null;
		}
		setAuthenticated(true);
	};

	useEffect(verifyCurrentUser, [user]);

	return authenticated ? children : null;
};

export default Authenticate;
