import React from 'react';
import useBand from '../../hooks/useBand.js';

const WithActiveBand = ({ children }) => {
	const { activeBand } = useBand();

	return activeBand ? children : null;
};

export default WithActiveBand;
