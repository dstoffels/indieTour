import useStore from 'hooks/useStore.js';
import React from 'react';

const withActiveBand = Component => props => {
	const { activeBand } = useStore();
	return activeBand ? <Component {...props} /> : <div></div>;
};

export default withActiveBand;
