import useBand from 'hooks/useBand.js';
import React from 'react';
import { useEffect } from 'react';

const withActiveBand = Component => props => {
	const { activeBand, fetchActiveBand } = useBand();

	useEffect(fetchActiveBand, []);

	return activeBand ? <Component {...props} /> : <div></div>;
};

export default withActiveBand;
