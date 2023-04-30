import { Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import React from 'react';

const DateContactListItem = ({ datecontact }) => {
	return (
		<PanelListItem>
			<SideStack padding={0}>
				<div>
					<div>{datecontact.title}</div>
					<div>{datecontact.contact.name}</div>
				</div>
			</SideStack>
		</PanelListItem>
	);
};

export default DateContactListItem;
