import axios from 'axios';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import React from 'react';
import endpoints from './endpoints.js';

/**
 * State to Props:
 * vars: activeBand, activeTour, isAdmin, isOwner
 * fns: setActiveTour, fetchActiveTour, updateTour, deleteTour, addTourUser
 * @param {*} Component
 * @returns
 */
const withActiveTour = Component => props => {
	const { activeTour } = useTour();

	return activeTour ? <Component {...props} /> : null;
};

export default withActiveTour;
