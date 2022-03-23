import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import DateDetailsPanel from './DateDetailsPanel/DateDetailsPanel.jsx';
import DatesPanel from './DatesPanel/DatesPanel.jsx';
import useDates from './useDates.js';

const DatesPage = props => {
	return (
		<Page>
			<DatesPanel />
			<DateDetailsPanel />
		</Page>
	);
};

export default withAuthentication(DatesPage);
