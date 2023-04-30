import { Box } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import AddContactBtnForm from '../AddContactBtnForm/AddContactBtnForm.jsx';

const ContactListPanel = ({ contacts = [], onChange }) => {
	const contactsList = contacts.map((contact) => (
		<ContactListItem key={`contact-${contact.id}`} contact={contact} />
	));

	return (
		<Panel isSubPanel title='Contacts' elevation={-1}>
			<AddContactBtnForm onSubmit={onChange} />
			{contactsList}
		</Panel>
	);
};

export default ContactListPanel;
