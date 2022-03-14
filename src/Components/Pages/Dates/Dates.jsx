import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Dates = props => {
	return (
		<Page>
			<h1>Dates</h1>
		</Page>
	);
};

export default withAuthentication(Dates);
