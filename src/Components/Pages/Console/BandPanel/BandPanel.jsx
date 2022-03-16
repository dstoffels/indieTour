import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import BandMembers from './BandMembers/BandMembers.jsx';
import BandSelector from './BandSelector.jsx';
import useBands from '../Bands/useBands.js';
import NewBandModalBtn from '../Bands/NewBandModal/NewBandModalBtn.jsx';

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
				<div>
					<NewBandModalBtn />
				</div>
			</Panel.Section>
		</Panel>
	);
};

export default BandPanel;
