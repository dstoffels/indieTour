import { Box, Divider } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import React, { useEffect, useState } from 'react';
import DateContactListItem from '../DateContactListItem/DateContactListItem.jsx';
import AddContactBtnForm from '../AddContactBtnForm/AddContactBtnForm.jsx';
import useDates from 'hooks/useDates.js';

const DateContactListPanel = ({}) => {
	const [contacts, setContacts] = useState([]);

	const { activeDate, fetchDateContacts } = useDates();

	const handleFetchDateContacts = () => fetchDateContacts(setContacts);

	useEffect(handleFetchDateContacts, [activeDate]);

	const contactsList = contacts.map((contact) => (
		<DateContactListItem
			key={`contact-${contact.id}`}
			datecontact={contact}
			onChange={handleFetchDateContacts}
		/>
	));

	return (
		<Panel isSubPanel title='Contacts' elevation={-1}>
			<AddContactBtnForm onSubmit={handleFetchDateContacts} />
			<Divider sx={{ m: '0 !important' }} />
			{contactsList}
		</Panel>
	);
};

export default DateContactListPanel;
