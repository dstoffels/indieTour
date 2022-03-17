import Panel from 'Components/Common/Panel/Panel.jsx';
import React from 'react';
import BandMembers from './BandMembers/BandMembers.jsx';
import BandSelector from './BandSelector.jsx';
import useBands from '../useBands.js';
import NewBandModalBtn from '../NewBandModal/NewBandModalBtn.jsx';
import { Typography } from '@mui/material';

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
				<>
					<Typography variant='subtitle1' marginBottom={2} align='center'>
						You're not a member of any bands yet!
					</Typography>
					<div>
						<NewBandModalBtn text='Create a new band' />
					</div>
				</>
			)}
			<div className='d-flex justify-content-end'></div>
		</Panel>
	);
};

export default BandPanel;
