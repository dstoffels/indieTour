import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
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
						<Panel.Divider />
						<BandMembers />
					</>
				) : (
					`You're not a member of any bands yet!`
				)}
			</Panel.Section>
		</Panel>
	);
};

export default BandPanel;
