import { Stack, Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';
import useAPI from 'hooks/useAPI.js';
import useBand from 'hooks/useBand.js';
import moment from 'moment';
import React from 'react';

const LogEntryListItem = ({ entry, setActiveProspect }) => {
	const { isAdmin } = useBand();
	const api = useAPI();

	const handleSubmit = (data) => {
		api.prospect.log_entry.detail.patch(entry.id, data, setActiveProspect);
	};

	const handleDelete = () => {
		api.prospect.log_entry.detail.delete(entry.id, setActiveProspect);
	};

	const timestamp = moment(entry.timestamp).format('ddd MMM DD');
	const fromNow = moment(entry.timestamp).fromNow();

	return (
		<PanelListItem>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<Stack>
					<Typography variant='caption'>{fromNow}</Typography>
					<Typography variant='caption'>{timestamp}</Typography>
				</Stack>
				<EditField
					name='note'
					fullWidth
					initValue={entry.note}
					onSubmit={handleSubmit}
					canEdit={isAdmin}
				/>
				<DeletePopoverBasic onDelete={handleDelete} small>
					Delete Entry?
				</DeletePopoverBasic>
			</Stack>
		</PanelListItem>
	);
};

export default LogEntryListItem;
