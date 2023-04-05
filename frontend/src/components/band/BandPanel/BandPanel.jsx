import React from 'react';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import BandOwnerPanel from 'components/band/BandOwnerPanel/BandOwnerPanel.jsx';
import ToursListPanel from 'components/tour/ToursListPanel/ToursListPanel.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import { Grid } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';

const BandPanel = () => {
	const { activeBand, updateActiveBand, withActiveBand, isAdmin } = useBand();

	return withActiveBand(
		<Panel
			padding={1}
			size={9}
			titleEl={
				<EditField
					variant='h5'
					fieldLabel='Band Name'
					initValue={activeBand?.name}
					name='name'
					onSubmit={updateActiveBand}
					canEdit={isAdmin}
				/>
			}
		>
			<Grid container spacing={1}>
				<ToursListPanel size={4} elevation={-1} />
				<UserPanel title='Members' />
				<BandOwnerPanel />
			</Grid>
		</Panel>,
	);
};

export default BandPanel;
