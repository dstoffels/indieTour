import { Grid, Typography } from '@mui/material';
import EditField from 'components/generic/EditField/EditField.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React from 'react';
import DateDetailsPanel from '../DateDetailsPanel/DateDetailsPanel.jsx';
import SchedulePanel from '../SchedulePanel/SchedulePanel.jsx';

const DatePanel = ({ activeTour, isAdmin }) => {
	const { activeDate, updateDate, deleteDate } = useDates();

	return activeDate ? (
		<Panel
			size={9}
			padding={1}
			titleEl={
				<div>
					<Typography variant='h5'>
						{moment(activeDate?.date).format('dddd DD MMMM YYYY')}
					</Typography>
					<EditField
						label='Title'
						initValue={activeDate?.title}
						name='title'
						variant='overline'
						onSubmit={updateDate}
						canEdit={isAdmin}></EditField>
				</div>
			}>
			<Grid container spacing={1}>
				<SchedulePanel activeDate={activeDate} isAdmin={isAdmin} />
				<DateDetailsPanel
					activeDate={activeDate}
					isAdmin={isAdmin}
					updateDate={updateDate}
					deleteDate={deleteDate}
				/>
			</Grid>
		</Panel>
	) : null;
};

export default DatePanel;
