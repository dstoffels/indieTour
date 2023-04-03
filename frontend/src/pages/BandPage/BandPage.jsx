import React, { useEffect } from 'react';
import Page from 'pages/Page/Page.jsx';
import useBand from 'hooks/useBand.js';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';
import BandListPanel from 'components/band/BandListPanel/BandListPanel.jsx';

const BandPage = ({}) => {
	const { fetchUserActiveBand } = useBand();

	useEffect(() => {
		fetchUserActiveBand();
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
