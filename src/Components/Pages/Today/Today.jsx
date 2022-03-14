import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import { TODAY } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Today = props => {
	// useNav(TODAY);
	return (
		<Page>
			<h1>Today</h1>
		</Page>
	);
};

export default withAuthentication(Today);
