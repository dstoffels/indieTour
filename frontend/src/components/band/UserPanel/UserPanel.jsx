import { Box } from '@mui/material';
import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';
import ListPanel from 'components/generic/ListPanel/ListPanel.jsx';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import withActiveBand from 'utils/withActiveBand.js';
import UserPanelItem from '../UserPanelItem/UserPanelItem.jsx';

const UserPanel = ({ activeBand, btns }) => {
	const userList = activeBand.users.map(banduser => (
		<UserPanelItem key={`user-${banduser.id}`} banduser={banduser} />
	));
	return (
		<ListPanel size={12} elevation={-1} title='Members' titleSize={6}>
			{userList}
			<ListPanelItem>
				<AddUserForm />
			</ListPanelItem>
		</ListPanel>
	);
};

export default withActiveBand(UserPanel);
