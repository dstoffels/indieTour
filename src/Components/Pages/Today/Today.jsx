import React from 'react';
import { TODAY } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Today = props => {
	useNav(TODAY);
	return <h1>Today</h1>;
};

export default withAuthentication(Today);
