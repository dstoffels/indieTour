import React from 'react';
import withActiveTour from 'utils/withActiveTour.js';
import Panel from 'components/generic/Panel/Panel.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';
import { Grid } from '@mui/material';
import UserPanel from 'components/band/UserPanel/UserPanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import useDates from 'hooks/useDates.js';
import useTour from 'hooks/useTour.js';
import useBand from 'hooks/useBand.js';

const TourPanel = ({ addTourDate }) => {
	const { isAdmin } = useBand();
	const { activeBand, activeTour, updateActiveTour, addTouruser, deleteActiveTour } = useTour();
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
					onSubmit={updateActiveTour}
					canEdit={isAdmin}
				/>
			}
		>
			<Grid container spacing={1}>
				{/* <DatesListPanel
					forTour
					activeTour={activeTour}
					size={4}
					elevation={-1}
					addTourDate={addTourDate}
				/> */}
				<UserPanel
					title='Personnel'
					forTour
					users={activeTour.users}
					bandUsers={activeBand.users}
					isAdmin={isAdmin}
					onSubmit={addTouruser}
				/>
				<TourDetailsPanel
					activeTour={activeTour}
					deleteTour={deleteActiveTour}
					updateTour={updateActiveTour}
				/>
			</Grid>
		</Panel>
	);
};

export default withActiveTour(TourPanel);
