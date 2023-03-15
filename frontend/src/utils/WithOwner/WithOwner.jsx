import useAuth from 'hooks/useAuth.js';
import useBand from 'hooks/useBand.js';
import React from 'react';

const WithOwner = ({ children }) => {
	const { user } = useAuth();
	const { activeBand } = useBand();

	const isOwner = user.id === activeBand.owner.id;

	return isOwner ? { children } : null;
};

export default WithOwner;
