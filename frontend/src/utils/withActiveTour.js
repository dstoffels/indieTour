import useStore from 'hooks/useStore.js';
import React from 'react';
import withActiveBand from './withActiveBand.js';

const withActiveTour = Component => props => {
	const { activeTour } = useStore();
	return activeTour ? <Component {...props} /> : null;
};

export default withActiveTour;
