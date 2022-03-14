import Panel from 'Components/Common/Panel/Panel.jsx';
import React, { useEffect } from 'react';
import BandMembers from '../Bands/BandInfo/BandMembers/BandMembers.jsx';
import BandSelector from '../Bands/BandSelector/BandSelector.jsx';
import BandModalBtn from '../Bands/NewBand/BandModal/BandModalBtn.jsx';
import useBands from '../Bands/useBands.js';

const BandPanel = props => {
	// STATE
	const { bands } = useBands();

	return (
		<Panel title='BANDS'>
			<Panel.Section>
				{bands.length ? (
					<>
						<BandSelector />
						<BandMembers />
					</>
				) : (
					`You don't have any bands yet!`
				)}
				<Panel.Divider />
				<div>
					<BandModalBtn />
				</div>
			</Panel.Section>
		</Panel>
	);
};

export default BandPanel;
