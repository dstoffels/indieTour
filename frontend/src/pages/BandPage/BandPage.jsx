import React, { useEffect, useState } from 'react';
import Page from 'pages/Page/Page.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import BandListItem from 'components/band/BandListItem/BandListItem.jsx';

import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';
import useAPI from 'hooks/useAPI.js';

const BandPage = ({}) => {
	const { activeBand, setActiveBand } = useBand();
	const [userBands, setUserBands] = useState([]);

	const fetchUserBands = async () => {
		const response = await api.band.get_all();
		setUserBands(response.data);
	};

	const api = useAPI();

	useEffect(() => {
		fetchUserBands();
	}, [activeBand]);

	const bandList = userBands?.map(band => (
		<BandListItem
			key={`band-${band.id}`}
			band={band}
			activeBand={activeBand}
			setActiveBand={setActiveBand}
		/>
	));

	return (
		<Page>
			<Page.SplitBody>
				<Panel size={3} title='Bands'>
					<NewBandForm onPost={fetchUserBands} />
					{bandList}
				</Panel>
				<BandPanel />
			</Page.SplitBody>
		</Page>
	);
};

export default BandPage;
