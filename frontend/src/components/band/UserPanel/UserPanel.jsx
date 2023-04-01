import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useState } from 'react';
import AllMembersSwitch from '../AllMembersSwitch/AllMembersSwitch.jsx';
import UserPanelItem from '../UserPanelItem/UserPanelItem.jsx';

const UserPanel = ({
	users = [],
	forTour = false,
	bandUsers = [],
	onSubmit,
	isAdmin,
	title = '',
}) => {
	const userList = users.map(banduser => (
		<UserPanelItem key={`user-${banduser.banduser_id}`} banduser={banduser} forTour={forTour} />
	));

	return (
		<Panel
			size={4}
			elevation={-1}
			title={title}
			titleSize={6}
			actionBtn={
				<AllMembersSwitch
					users={bandUsers}
					checked={users.length === bandUsers.length}
					forTour={forTour}
					onSubmit={onSubmit}
				/>
			}
		>
			<AddUserForm
				forTour={forTour}
				users={users}
				bandUsers={bandUsers}
				onSubmit={onSubmit}
				isAdmin={isAdmin}
			/>
			{userList}
		</Panel>
	);
};

export default UserPanel;
