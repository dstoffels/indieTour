import React from 'react';
import withActiveTour from 'utils/withActiveTour.js';
import Panel from 'components/generic/Panel/Panel.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';
import { Grid } from '@mui/material';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';

const TourPanel = ({ activeTour, updateTour, isAdmin }) => {
	return (
		<Panel
			size={9}
			padding={1}
			titleEl={
				<EditField
					label='Tour Name'
					initValue={activeTour.name}
					name='name'
					variant='h5'
					onSubmit={updateTour}
					canEdit={isAdmin}
				/>
			}>
			<Grid container spacing={1}>
				<TourDetailsPanel />
				<UserPanel forTour />
			</Grid>
		</Panel>
	);
};

export default withActiveTour(TourPanel);
