import { Done } from '@mui/icons-material';
import {
	Box,
	Button,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
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
import React, { useState } from 'react';
import AddLogEntryForm from '../AddLogEntryForm/AddLogEntryForm.jsx';
import LogEntryListItem from '../LogEntryListItem/LogEntryListItem.jsx';

const ProspectListItem = ({ prospect, onChange }) => {
	const [editing, setEditing] = useState(false);
	console.log(prospect);
	const { isAdmin } = useBand();
	const { setActiveProspect, updateProspect, deleteProspect } = useProspect();

	const colors = ['', 'orange', 'secondary', 'error', 'green', 'primary'];

	const options = prospect.status_choices.map((choice, i) => (
		<MenuItem key={`prospect-choice-${choice}-${i}`} value={choice}>
			<Typography variant='caption' color={colors[i]}>
				{choice}
			</Typography>
		</MenuItem>
	));

	const handleStatus = (e) => {
		e.stopPropagation();
		updateProspect(prospect.id, { status: e.target.value }, onChange);
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

	return (
		<PanelListItem active={editing} onClick={!editing ? handleEditing : null}>
			{editing ? (
				<Stack>
					<SideStack>
						<LocationEditField initValue={prospect.venue} label='Venue' onSubmit={handlePlace} />
						<Stack direction='row' spacing={1}>
							<Select
								label='Status'
								size='small'
								variant='standard'
								value={prospect.status}
								onChange={handleStatus}
							>
								{options}
							</Select>
							{prospect.status === 'HOLD' && (
								<TextField
									type='number'
									label='Hold #'
									value={prospect.hold}
									onChange={(e) => handleUpdateProspect({ hold: e.target.value })}
									name='hold'
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
					<Divider sx={{ m: '0 !important' }} />
					<Typography color='primary' variant='overline'>
						LOG
					</Typography>
					<AddLogEntryForm prospect={prospect} onSubmit={onChange} />
					<Divider sx={{ m: '0 !important' }} />
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
			) : (
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
			)}
		</PanelListItem>
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
