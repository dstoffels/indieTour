import { Grid, List, ListSubheader } from '@mui/material';
import { Stack } from '@mui/system';
import useStore from 'hooks/useStore.js';
import React from 'react';
import { Container } from 'react-bootstrap';
import TourListItem from '../TourListItem/TourListItem.jsx';
import UserListItem from '../UserListItem/UserListItem.jsx';

const BandInfo = ({}) => {
	const { activeBand } = useStore();

	const users = activeBand?.users?.map(user => <UserListItem user={user} />);
	const tours = activeBand?.tours?.map(tour => <TourListItem tour={tour} />);

	return (
		<Grid container justifyContent='space-evenly'>
			<Grid xs={5.5}>
				<List subheader={<li />}>
					<ListSubheader>Tours</ListSubheader>
					{tours}
				</List>
			</Grid>
			<Grid xs={5.5}>
				<List subheader={<li />}>
					<ListSubheader>Users</ListSubheader>
					{users}
				</List>
			</Grid>
		</Grid>
	);
};

export default BandInfo;
