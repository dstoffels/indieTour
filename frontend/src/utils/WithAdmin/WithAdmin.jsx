import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';

const WithAdmin = ({ children }) => {
	const { user } = useAuth();
	const { activeBand } = useBand();

	const isAdmin = Boolean(
		activeBand.owner.id === user.id || activeBand.users.find(bandUser => bandUser.id === user.id),
	);

	return isAdmin ? children : null;
};

export default withActiveBand(WithAdmin);
