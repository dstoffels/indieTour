import Grid from '@mui/material/Unstable_Grid2';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import useForm from 'hooks/useForm.js';
import useStore from 'hooks/useStore.js';
import React from 'react';
import { setModalKey } from 'redux/modalSlice.js';
import TourListItem from '../TourListItem/TourListItem.jsx';
import UserListItem from '../UserListItem/UserListItem.jsx';

const BandInfo = ({}) => {
	const { activeBand } = useStore();
	const { formKeys, openForm } = useForm();

	const tours = activeBand?.tours?.map((tour, i) => (
		<TourListItem key={`${i}-${tour.id}`} tour={tour} />
	));

	const handleAddTour = () => {
		openForm(formKeys.newTour);
	};

	const users = activeBand?.users?.map((user, i) => (
		<UserListItem key={`${i}-${user.id}`} user={user} />
	));

	return (
		<Grid container justifyContent='space-evenly' spacing={2} padding={2}>
			<ListPanel title='Tours' list={tours} onAdd={handleAddTour} />
			<ListPanel title='Users' list={users} />
		</Grid>
	);
};

export default BandInfo;
