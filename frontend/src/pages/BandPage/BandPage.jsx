import React, { useEffect } from 'react';
import Page from 'pages/Page/Page.jsx';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';
import BandListPanel from 'components/band/BandListPanel/BandListPanel.jsx';
import useBand from 'hooks/useBand.js';

const BandPage = ({}) => {
	const { activeBand, fetchUserActiveBand } = useBand();

	useEffect(() => {
		!activeBand && fetchUserActiveBand();
	}, []);

	return (
		<Page>
			<Page.SplitBody>
				<BandListPanel />
				<BandPanel />
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
