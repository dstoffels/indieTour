import React from 'react';
import Page from 'pages/Page/Page.jsx';
import BandSelect from 'components/band/BandSelect/BandSelect.jsx';
import ToursListPanel from 'components/tour/ToursListPanel/ToursListPanel.jsx';
import withActiveBand from 'utils/withActiveBand.js';
import TourPanel from 'components/tour/TourPanel/TourPanel.jsx';

const TourPage = ({ activeBand }) => {
	return (
		<Page select={<BandSelect />}>
			<Page.SplitBody>
				<ToursListPanel activeBand={activeBand} size={3} />
				<TourPanel />
			</Page.SplitBody>
		</Page>
	);
};

export default withActiveBand(TourPage);
