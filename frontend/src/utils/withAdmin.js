import useAuth from 'hooks/useAuth.js';
import useStore from 'hooks/useStore.js';
import React, { useState } from 'react';

const withAuth = Component => props => {
	const { user } = useAuth();
	const { activeBand } = useStore();

	const isAdmin = Boolean(
		activeBand.owner.id === user.id || activeBand.users.find(bandUser => bandUser.id === user.id),
	);

	return isAdmin ? <Component {...props} /> : null;
};

export default withAuth;
