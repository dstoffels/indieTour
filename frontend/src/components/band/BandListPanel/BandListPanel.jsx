import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useEffect, useState } from 'react';
import BandListItem from '../BandListItem/BandListItem.jsx';
import useBand from 'hooks/useBand.js';

const BandListPanel = ({}) => {
	const { activeBand, fetchUserBands } = useBand();
	const [userBands, setUserBands] = useState([]);

	useEffect(() => {
		fetchUserBands(setUserBands);
	}, [activeBand]);

	const bandList = userBands?.map((band) => <BandListItem key={`band-${band.id}`} band={band} />);
	return (
		<Panel size={3} title='Bands'>
			<NewBandForm />
			{bandList}
		</Panel>
	);
};

export default BandListPanel;
