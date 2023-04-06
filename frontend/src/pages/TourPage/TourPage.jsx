import React, { useEffect } from 'react';
import Page from 'pages/Page/Page.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';
import BandDetailsPanel from 'components/band/BandDetailsPanel/BandDetailsPanel.jsx';

const TourPage = ({}) => {
	const { activeBand, fetchUserActiveBand, withActiveBand } = useBand();
	const { activeTour, fetchUserActiveTour, updateActiveTour, withActiveTour } = useTour();

	useEffect(() => {
		!activeBand && fetchUserActiveBand();
	}, []);

	useEffect(() => {
		!activeTour && fetchUserActiveTour();
	}, []);

	return withActiveBand(
		<Page>
			{withActiveTour(<TourDetailsPanel />)}
			<BandDetailsPanel />
		</Page>,
	);
};

export default TourPage;
