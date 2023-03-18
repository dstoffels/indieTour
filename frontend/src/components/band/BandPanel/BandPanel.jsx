import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import BandOwnerPanel from 'components/band/BandOwnerPanel/BandOwnerPanel.jsx';
import ToursListPanel from 'components/tour/ToursListPanel/ToursListPanel.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import { Grid } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';

const BandPanel = ({ activeBand, isAdmin, isOwner, updateBand, addBandUser }) => {
	return (
		<Panel
			padding={1}
			size={9}
			titleEl={
				<EditField
					variant='h5'
					label='Band Name'
					initValue={activeBand?.name}
					name='name'
					onSubmit={updateBand}
					canEdit={isAdmin}
				/>
			}>
			<Grid container spacing={1}>
				<ToursListPanel activeBand={activeBand} size={4} elevation={-1} />
				<UserPanel
					users={activeBand.users}
					onSubmit={addBandUser}
					isAdmin={isAdmin}
					title='Members'
				/>
				<BandOwnerPanel activeBand={activeBand} isOwner={isOwner} />
			</Grid>
		</Panel>
	);
};

export default withActiveBand(BandPanel);
