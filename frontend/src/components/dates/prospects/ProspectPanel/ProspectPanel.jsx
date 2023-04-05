import { Divider, Stack, Typography } from '@mui/material';
import DangerZone from 'components/generic/danger-zone/DangerZone/DangerZone.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useAPI from 'hooks/useAPI.js';
import useBand from 'hooks/useBand.js';
import React from 'react';
import AddLogEntryForm from '../AddLogEntryForm/AddLogEntryForm.jsx';
import LogEntryListItem from '../LogEntryListItem/LogEntryListItem.jsx';
import useProspect from 'hooks/useProspect.js';

const ProspectPanel = ({}) => {
	const { isAdmin } = useBand();

	const { activeProspect, setActiveProspect, withActiveProspect } = useProspect();

	const api = useAPI();

	const handleNotes = (value) => {
		api.prospect.detail.patch(activeProspect.id, value, setActiveProspect);
	};

	const handleDelete = () => {
		api.prospect.detail.delete(activeProspect.id, setActiveProspect);
	};

	const logEntries = activeProspect.log_entries.map((entry) => (
		<LogEntryListItem key={entry.id} entry={entry} setActiveProspect={setActiveProspect} />
	));

	return withActiveProspect(
		<Panel padding={2} title={activeProspect.venue.name} size={4} elevation={-1}>
			<Stack spacing={2}>
				<div>
					<Typography color='primary' variant='overline'>
						Address
					</Typography>
					<Typography>{activeProspect.venue.formatted_address}</Typography>
				</div>
				<Divider />
				<EditField
					canEdit={isAdmin}
					fullWidth
					label='Notes'
					name='notes'
					initValue={activeProspect.notes}
					onSubmit={handleNotes}
				/>
				<Divider />
				<div>
					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						<Typography color='primary' variant='overline'>
							Log
						</Typography>
						<AddLogEntryForm
							activeProspect={activeProspect}
							setActiveProspect={setActiveProspect}
						/>
					</Stack>
					<Divider />
					{logEntries}
				</div>
				<DangerZone show={isAdmin}>
					<DeletePopoverBasic onDelete={handleDelete} btnTxt='Delete Prospect'>
						Are you sure you want to delete {activeProspect.venue.name} prospect?
					</DeletePopoverBasic>
				</DangerZone>
			</Stack>
		</Panel>,
	);
};

export default ProspectPanel;
