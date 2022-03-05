import React from 'react';
import { CONSOLE } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import BottomNav from '../../Common/BottomNav/BottomNav.jsx';

const Console = props => {
	useNav(CONSOLE);
	return (
		<>
			<h1>Console</h1>
		</>
	);
};

export default withAuthentication(Console);
