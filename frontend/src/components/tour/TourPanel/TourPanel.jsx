import React from 'react';
import Panel from 'components/generic/Panel/Panel.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';
import { Grid } from '@mui/material';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import useTour from 'hooks/useTour.js';
import useBand from 'hooks/useBand.js';
import BandDetailsPanel from 'components/band/BandDetailsPanel/BandDetailsPanel.jsx';

const TourPanel = ({ addTourDate }) => {
	const { isAdmin } = useBand();
	const { activeTour, tourusers, updateActiveTour, withActiveTour } = useTour();

	return withActiveTour(
		<>
			<Grid container spacing={1}>
				<TourDetailsPanel />
				<UserPanel title='Personnel' forTour users={tourusers} />
			</Grid>
			<Grid container spacing={1}>
				<UserPanel title='Members' />
				<BandDetailsPanel />
			</Grid>
		</>,
	);
};

export default TourPanel;
