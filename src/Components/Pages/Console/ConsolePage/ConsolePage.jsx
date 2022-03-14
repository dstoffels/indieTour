import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import Page from 'Components/Common/Page/Page.jsx';
import { CONSOLE } from 'constants/routes.js';
import React from 'react';
import BandPanel from '../BandPanel/BandPanel.jsx';
import BandModal from '../Bands/NewBand/BandModal/BandModal.jsx';
import TourPanel from '../TourPanel/TourPanel.jsx';
import './Console.css';

const ConsolePage = props => {
	return (
		<Page route={CONSOLE}>
			<BandModal />
			<BandPanel />
			<TourPanel />
		</Page>
	);
};

export default withAuthentication(ConsolePage);
