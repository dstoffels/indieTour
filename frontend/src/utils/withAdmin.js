import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import React, { useState } from 'react';

const withAdmin = Component => props => {
	const { user } = useAuth();
	const { activeBand } = useBand();

	const isAdmin = Boolean(
		activeBand.owner.id === user.id || activeBand.users.find(bandUser => bandUser.id === user.id),
	);

	return isAdmin ? <Component {...props} /> : null;
};

export default withAdmin;
