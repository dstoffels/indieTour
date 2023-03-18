import { Box } from '@mui/material';
import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import UserPanelItem from '../UserPanelItem/UserPanelItem.jsx';

const UserPanel = ({ activeBand, forTour = false }) => {
	const userList = activeBand.users.map(banduser => (
		<UserPanelItem key={`user-${banduser.id}`} banduser={banduser} />
	));
	return (
		<Panel size={4} elevation={-1} title='Members' titleSize={6}>
			<AddUserForm forTour={forTour} bandUsers={activeBand.users} />
			{userList}
		</Panel>
	);
};

export default withActiveBand(UserPanel);
