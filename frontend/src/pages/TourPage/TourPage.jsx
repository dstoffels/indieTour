import React from 'react';
import Page from 'pages/Page/Page.jsx';
import useForm from 'hooks/useForm.js';
import TourListItem from '../../components/band/TourListItem/TourListItem.jsx';
import BandSelect from 'components/band/BandSelect/BandSelect.jsx';
import { AddCircle } from '@mui/icons-material';
import { FormControlLabel, Grid, IconButton, Switch, Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import WithActiveTour from 'utils/WithActiveTour/WithActiveTour.jsx';
import TourMenu from 'components/band/TourMenu/TourMenu.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import withActiveTour from 'utils/withActiveTour.js';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';
import axios from 'axios';
import endpoints from 'utils/endpoints.js';
import { getConfigObj } from 'redux/userSlice.js';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';

const TourPage = ({}) => {
	const { activeBand, fetchActiveBand, isAdmin } = useBand();
	const { activeTour, fetchActiveTour } = useTour();
	const { formKeys, openForm } = useForm();

	let tours = activeBand?.tours?.length
		? activeBand?.tours?.map((tour, i) => <TourListItem key={`${i}-${tour.id}`} tour={tour} />)
		: 'No Tours Yet';

	const handleAddTour = () => {
		openForm(formKeys.newTour, {
			name: '',
			notes: '',
			users: [],
			dates: [],
		});
	};

	const handleSubmit = async formData => {
		const config = getConfigObj();
		try {
			await axios.patch(endpoints.tours(activeTour.band_id, activeTour.id), formData, config);
			fetchActiveTour();
			fetchActiveBand();
		} catch (error) {
			console.error(error.response.data);
		}
	};

	return (
		<Page select={<BandSelect />}>
			<Page.SplitBody>
				<Panel
					size={3}
					title='Tours'
					actionBtn={<FormControlLabel control={<Switch />} label='Archived' />}>
					<NewTourForm />
					{tours}
				</Panel>
				<Panel
					size={9}
					padding={1}
					titleEl={
						<EditField
							label='Tour Name'
							initValue={activeTour.name}
							name='name'
							variant='h5'
							onSubmit={handleSubmit}
							canEdit={isAdmin}
						/>
					}>
					<Grid container spacing={1}>
						<TourDetailsPanel />
					</Grid>
				</Panel>
			</Page.SplitBody>
		</Page>
	);
};

export default TourPage;
