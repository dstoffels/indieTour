import useAuth from 'hooks/useAuth.js';
import useStore from 'hooks/useStore.js';
import React, { useState } from 'react';

const withOwner = Component => props => {
	const { user } = useAuth();
	const { activeBand } = useStore();

	const isOwner = activeBand.owner.id === user.id;
	console.log(isOwner);

	return isOwner ? <Component {...props} /> : null;
};

export default withOwner;
