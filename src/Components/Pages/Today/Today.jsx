import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Today = props => {
	return (
		<Page>
			<h1>Today</h1>
		</Page>
	);
};

export default withAuthentication(Today);
