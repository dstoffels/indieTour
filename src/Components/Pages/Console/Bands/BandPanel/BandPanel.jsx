import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import BandMembers from './BandMembers/BandMembers.jsx';
import BandSelector from './BandSelector.jsx';
import useBands from '../useBands.js';

const BandPanel = props => {
	// STATE
	const { bands, activeMember } = useBands();

	return (
		<Panel title='Band'>
			{bands.length ? (
				<>
					<h5 className='panel-header'>{activeMember?.bandName}</h5>
					<BandMembers />
					<Panel.Divider />
					<BandSelector />
				</>
			) : (
				`You're not a member of any bands yet!`
			)}
			<div className='d-flex justify-content-end'></div>
		</Panel>
	);
};

export default BandPanel;
