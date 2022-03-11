import React from 'react';
import { BOOKING } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

// BOOKING FLOW:
//

const Booking = props => {
	useNav(BOOKING);
	return <h1>Booking</h1>;
};

export default withAuthentication(Booking);
