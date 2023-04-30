import { Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import React from 'react';

const ContactListItem = ({ contact }) => {
	console.log(contact);
	return (
		<PanelListItem>
			<SideStack padding={0}>
				<div>
					<div>{contact.title}</div>
					<div>{contact.contact.name}</div>
				</div>
			</SideStack>
		</PanelListItem>
	);
};

export default ContactListItem;
