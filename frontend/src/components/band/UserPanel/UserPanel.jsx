import AddUserForm from 'components/forms/users/AddUserForm/AddUserForm.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useState } from 'react';
import AllMembersSwitch from '../AllMembersSwitch/AllMembersSwitch.jsx';
import UserPanelItem from '../UserPanelItem/UserPanelItem.jsx';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';

const UserPanel = ({ forTour = false, title = '' }) => {
	const { isAdmin, bandusers } = useBand();
	const { tourusers } = useTour();

	let users = forTour ? tourusers : bandusers;

	const userList = users.map((banduser) => (
		<UserPanelItem
			key={`user-${banduser.id}`}
			banduser={banduser}
			forTour={forTour}
			isAdmin={isAdmin}
		/>
	));

	return (
		<Panel
			size={4}
			elevation={-1}
			title={title}
			titleSize={6}
			actionBtn={
				<AllMembersSwitch
					users={bandusers}
					checked={users.length === bandusers.length}
					forTour={forTour}
				/>
			}
		>
			<AddUserForm forTour={forTour} users={users} />
			{userList}
		</Panel>
	);
};

export default UserPanel;
