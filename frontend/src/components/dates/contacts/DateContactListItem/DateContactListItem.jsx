import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import React, { useState } from 'react';
import ContactMethodForm from '../ContactMethodForm/ContactMethodForm.jsx';
import useContacts from 'hooks/useContacts.js';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import { Done, Facebook } from '@mui/icons-material';
import MethodListItem from '../MethodListItem/MethodListItem.jsx';
import MethodIcon from '../MethodIcon/MethodIcon.jsx';

const DateContactListItem = ({ datecontact, onChange }) => {
	const [editing, setEditing] = useState(false);

	const { updateDateContact, updateContact, deleteDateContact } = useContacts();

	const handleEditing = (e) => {
		setEditing(true);
	};

	const handleClose = () => {
		setEditing(false);
	};

	const { methods } = datecontact.contact;

	const methodList = methods.map((method, i) => (
		<MethodListItem key={`method-item-${i}`} method={method} onChange={onChange} />
	));

	const methodIcons = methods.map((method, i) => (
		<MethodIcon method={method} key={`method-icon-${method.id}`} />
	));

	return (
		<PanelListItem onClick={!editing ? handleEditing : null}>
			{editing ? (
				<Stack spacing={1}>
					<SideStack padding={0}>
						<EditField
							padding={0}
							label='Title'
							initValue={datecontact.title}
							onSubmit={(data) => updateDateContact(datecontact.id, data, onChange)}
							name='title'
						/>
						<EditField
							padding={0}
							label='Contact'
							initValue={datecontact.contact.name}
							onSubmit={(data) => updateContact(datecontact.contact.id, data, onChange)}
							name='name'
						/>
					</SideStack>
					<Divider />
					<Typography variant='overline' color='primary'>
						Contact Methods
					</Typography>
					{methodList}
					<ContactMethodForm contact_id={datecontact.contact.id} onChange={onChange} />
					<SideStack justifyContent='end' padding={0}>
						<DeletePopoverBasic
							small
							onDelete={() => deleteDateContact(datecontact.id, onChange)}
							tooltipTxt='Remove Contact'
						>
							Remove {datecontact.contact.name}?
						</DeletePopoverBasic>
						<Button onClick={handleClose} startIcon={<Done />}>
							Done
						</Button>
					</SideStack>
				</Stack>
			) : (
				<SideStack>
					<Box>
						<Typography variant='overline' color='primary'>
							{datecontact.title}
						</Typography>
						<Typography>{datecontact.contact.name}</Typography>
					</Box>
					<Box>
						<SideStack>{methodIcons}</SideStack>
					</Box>
				</SideStack>
			)}
		</PanelListItem>
	);
};

export default DateContactListItem;
