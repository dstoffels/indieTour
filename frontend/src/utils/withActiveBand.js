import useBand from 'hooks/useBand.js';
import React from 'react';

const withActiveBand = Component => props => {
	const { activeBand } = useBand();

	return activeBand ? <Component {...props} /> : <div></div>;
};

export default withActiveBand;
