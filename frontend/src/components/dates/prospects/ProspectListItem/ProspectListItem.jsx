import { Done } from '@mui/icons-material';
import {
	Box,
	Button,
	Collapse,
	Divider,
	MenuItem,
	Paper,
	Popover,
	Select,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import LocationEditField from 'components/generic/LocationEditField/LocationEditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import useBand from 'hooks/useBand.js';
import useProspect from 'hooks/useProspect.js';
import React, { useEffect, useRef, useState } from 'react';
import AddLogEntryForm from '../AddLogEntryForm/AddLogEntryForm.jsx';
import LogEntryListItem from '../LogEntryListItem/LogEntryListItem.jsx';
import useDates from 'hooks/useDates.js';
import useEscKey from 'hooks/useEscKey.js';
import AddContactBtnForm from 'components/dates/contacts/AddContactBtnForm/AddContactBtnForm.jsx';
import DateContactListItem from 'components/dates/contacts/DateContactListItem/DateContactListItem.jsx';
import usePlaces from 'hooks/usePlaces.js';

const ProspectListItem = ({ prospect, onChange }) => {
	const [editing, setEditing] = useState(false);
	const [contacts, setContacts] = useState([]);

	const { isAdmin } = useBand();
	const { activeDate, getTourDate } = useDates();
	const { fetchPlaceContacts } = usePlaces();
	const { setActiveProspect, updateProspect, deleteProspect } = useProspect();
	const [open, setOpen] = useState(false);

	const colors = ['', 'orange', 'secondary', 'error', 'green', 'primary'];

	const options = prospect.status_choices.map((choice, i) => (
		<MenuItem key={`prospect-choice-${choice}-${i}`} value={choice}>
			<Typography variant='caption' color={colors[i]}>
				{choice}
			</Typography>
		</MenuItem>
	));

	useEffect(() => {
		prospect.venue && fetchPlaceContacts(prospect.venue.place_id, setContacts);
	}, []);

	const selectRef = useRef(null);

	function handleStatus(e) {
		let status = e.target.value;
		if (status === 'CONFIRMED') {
			setOpen(true);
		} else {
			updateProspect(prospect.id, { status }, onChange);
		}
	}

	const handleConfirm = () => {
		updateProspect(prospect.id, { status: 'CONFIRMED' }, () => {
			getTourDate(activeDate.id);
			onChange();
		});
		setOpen(false);
	};

	const handleEditing = () => {
		setEditing(true);
	};

	const handleClose = () => {
		setEditing(false);
	};

	const handleDelete = () => {
		deleteProspect(prospect.id, onChange);
	};

	const handleUpdateProspect = (data) => {
		updateProspect(prospect.id, data, onChange);
	};

	const handlePlace = (data) => {
		updateProspect(prospect.id, { place: data }, onChange);
	};

	const logEntries = prospect.log_entries.map((entry) => (
		<LogEntryListItem key={entry.id} entry={entry} setActiveProspect={setActiveProspect} />
	));

	const placeContacts = contacts.map((contact) => (
		<DateContactListItem
			key={`prospect-contact-${contact.id}`}
			datecontact={contact}
			onChange={onChange}
		/>
	));

	useEscKey(handleClose);

	return (
		<>
			<Collapse in={editing}>
				<Box padding={1}>
					<Paper elevation={6}>
						<Stack>
							<SideStack>
								<LocationEditField
									initValue={prospect.venue}
									label='Venue'
									onSubmit={handlePlace}
								/>
								<Stack direction='row' spacing={1}>
									<Box padding={2}>
										<Select
											ref={selectRef}
											label='Status'
											size='small'
											variant='standard'
											value={prospect.status}
											onChange={handleStatus}
										>
											{options}
										</Select>
									</Box>
									<Popover open={open} anchorEl={selectRef.current} onClose={() => setOpen(false)}>
										<Paper elevation={0}>
											<Stack spacing={1} padding={2}>
												<Typography textAlign='center'>Confirm Venue for Date?</Typography>
												<Typography textAlign='center' variant='caption'>
													Date's location will be updated with this venue
												</Typography>
												<SideStack>
													<Button onClick={handleConfirm} size='large' color='error'>
														Confirm
													</Button>
													<Button onClick={() => setOpen(false)} size='large' color='warning'>
														Cancel
													</Button>
												</SideStack>
											</Stack>
										</Paper>
									</Popover>
									{prospect.status === 'HOLD' && (
										<TextField
											type='number'
											label='Hold #'
											value={prospect.hold}
											onChange={(e) => handleUpdateProspect({ hold: e.target.value })}
											name='hold'
											size='small'
											variant='standard'
										/>
									)}
								</Stack>
							</SideStack>
							<EditField
								canEdit={isAdmin}
								fullWidth
								label='Venue Notes'
								name='notes'
								initValue={prospect.notes}
								onSubmit={handleUpdateProspect}
							/>
							<Paper elevation={2} sx={{ borderRadius: 0 }}>
								<Box paddingX={2} paddingY={1}>
									<Typography variant='h6'>Contacts</Typography>
								</Box>
							</Paper>
							<AddContactBtnForm place_id={prospect.venue?.place_id} onSubmit={onChange} />
							{placeContacts}
							<Paper elevation={2} sx={{ borderRadius: 0 }}>
								<Box paddingX={2} paddingY={1}>
									<Typography variant='h6'>Log</Typography>
								</Box>
							</Paper>
							<AddLogEntryForm prospect={prospect} onSubmit={onChange} />
							{logEntries}
							<SideStack justifyContent='end'>
								<DeletePopoverBasic onDelete={handleDelete} small tooltipTxt='Delete Prospect'>
									Delete Prospect?
								</DeletePopoverBasic>
								<Button onClick={handleClose} startIcon={<Done />}>
									Done
								</Button>
							</SideStack>
						</Stack>
					</Paper>
				</Box>
			</Collapse>
			<Collapse in={!editing}>
				<PanelListItem active={editing} onClick={!editing ? handleEditing : null}>
					<SideStack>
						<Stack>
							<Typography fontWeight={600}>{prospect.venue.name}</Typography>
							<Typography variant='caption'>{prospect.venue.formatted_address}</Typography>
						</Stack>
						<Stack spacing={1} direction='row' alignItems='center'>
							{prospect.status === 'HOLD' && (
								<Typography variant='caption'>{numberingFactory(prospect.hold)}</Typography>
							)}
							<Typography
								color={colors[prospect.status_choices.indexOf(prospect.status)]}
								variant='caption'
							>
								{prospect.status}
							</Typography>
						</Stack>
					</SideStack>
				</PanelListItem>
			</Collapse>
		</>
	);
};

export default ProspectListItem;

function numberingFactory(num) {
	if ([11, 12, 13].includes(num % 100)) {
		return `${num}th`;
	}

	let i = num % 10;

	switch (i) {
		case 1:
			return `${num}st`;
		case 2:
			return `${num}nd`;
		case 3:
			return `${num}rd`;
		default:
			return `${num}th`;
	}
}
