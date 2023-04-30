import { Box } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useEffect, useState } from 'react';
import ContactListItem from '../DateContactListItem/DateContactListItem.jsx';
import AddContactBtnForm from '../AddContactBtnForm/AddContactBtnForm.jsx';
import useDates from 'hooks/useDates.js';

const DateContactListPanel = ({}) => {
	const [contacts, setContacts] = useState([]);

	const { activeDate, fetchDateContacts } = useDates();

	const handleFetchDateContacts = () => fetchDateContacts(setContacts);

	useEffect(handleFetchDateContacts, [activeDate]);

	const contactsList = contacts.map((contact) => (
		<ContactListItem key={`contact-${contact.id}`} datecontact={contact} />
	));

	return (
		<Panel isSubPanel title='Contacts' elevation={-1}>
			<AddContactBtnForm onSubmit={handleFetchDateContacts} />
			{contactsList}
		</Panel>
	);
};

export default DateContactListPanel;
