import React from 'react';
import Page from 'pages/Page/Page.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import BandListItem from 'components/band/BandListItem/BandListItem.jsx';

import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';

const BandPage = ({}) => {
	const {
		activeBand,
		userBands,
		handleBandPatch,
		isAdmin,
		isOwner,
		setActiveband,
		fetchActiveBand,
	} = useBand();

	const handleAddBand = () => {};

	const bandList = userBands?.map(band => (
		<BandListItem
			key={`band-${band.id}`}
			band={band}
			activeBand={activeBand}
			setActiveband={setActiveband}
		/>
	));

	return (
		<Page>
			<Page.SplitBody>
				<Panel size={3} title='Bands'>
					<NewBandForm />
					{bandList}
				</Panel>
				<BandPanel />
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
