import React, { useEffect } from 'react';
import Page from 'pages/Page/Page.jsx';
import BandSelect from 'components/band/BandSelect/BandSelect.jsx';
import ToursListPanel from 'components/tour/ToursListPanel/ToursListPanel.jsx';
import TourPanel from 'components/tour/TourPanel/TourPanel.jsx';
import useBand from 'hooks/useBand.js';

const TourPage = ({}) => {
	const { activeBand, fetchUserActiveBand, withActiveBand } = useBand();

	useEffect(() => {
		!activeBand && fetchUserActiveBand();
	}, []);

	return withActiveBand(
		<Page select={<BandSelect />}>
			<Page.SplitBody>
				<ToursListPanel size={3} />
				<TourPanel />
			</Page.SplitBody>
		</Page>,
	);
};

export default TourPage;
