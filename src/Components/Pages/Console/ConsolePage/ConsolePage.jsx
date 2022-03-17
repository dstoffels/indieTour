import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import MainModal from 'Components/Common/MainModal/MainModal.jsx';
import Page from 'Components/Common/Page/Page.jsx';
import { CONSOLE } from 'constants/routes.js';
import React from 'react';
import BandPanel from '../Bands/BandPanel/BandPanel.jsx';
import EditBandModal from '../Bands/EditBandModal/EditBandModal.jsx';
import NewBandModal from '../Bands/NewBandModal/NewBandModal.jsx';
import TourPanel from '../Tours/TourPanel/TourPanel.jsx';
import './Console.css';

const ConsolePage = props => {
	return (
		<Page route={CONSOLE}>
			<MainModal />
			{/* <NewBandModal /> */}
			{/* <EditBandModal /> */}
			<BandPanel />
			<TourPanel />
		</Page>
	);
};

export default withAuthentication(ConsolePage);
