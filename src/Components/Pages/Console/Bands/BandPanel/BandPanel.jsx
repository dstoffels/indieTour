import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import useBands from '../useBands.js';
import BandInfo from './BandInfo/BandInfo.jsx';
import Bands from './Bands/Bands.jsx';

const BandPanel = props => {
	// STATE
	const { bands, activeMember } = useBands();

	return (
		<Panel>
			<BandInfo />
			<Bands />
		</Panel>
	);
};

export default BandPanel;
