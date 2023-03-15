import useTour from 'hooks/useTour.js';
import React from 'react';

const WithActiveTour = ({ children }) => {
	const { activeTour } = useTour();

	return activeTour ? children : null;
};

export default WithActiveTour;
