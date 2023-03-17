import useStore from 'hooks/useStore.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import withActiveBand from './withActiveBand.js';

const withActiveTour = Component => props => {
	const { activeTour, setActiveTour } = useTour();
	return activeTour ? (
		<Component {...props} activeTour={activeTour} setActiveTour={setActiveTour} />
	) : null;
};

export default withActiveTour;
