import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import BandMembers from './BandMembers/BandMembers.jsx';
import BandSelector from './BandSelector.jsx';
import NewBandModalBtn from '../NewBandModal/NewBandModalBtn.jsx';
import useBands from '../useBands.js';

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
				<div className='d-flex justify-content-end'>
					<NewBandModalBtn />
				</div>
			</Panel.Section>
		</Panel>
	);
};

export default BandPanel;
