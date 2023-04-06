import { Button, Grid, IconButton, Typography } from '@mui/material';
import Panel from 'components/generic/Panel/Panel.jsx';
import useDates from 'hooks/useDates.js';
import moment from 'moment';
import React, { useState } from 'react';
import DateDetailsPanel from '../DateDetailsPanel/DateDetailsPanel.jsx';
import SchedulePanel from '../SchedulePanel/SchedulePanel.jsx';
import useBand from 'hooks/useBand.js';
import LabeledSwitch from 'components/generic/LabeledSwitch/LabeledSwitch.jsx';
import ProspectPanels from '../prospects/ProspectPanels/ProspectPanels.jsx';
import { KeyboardArrowLeft } from '@mui/icons-material';

const DatePanel = ({ showDates, toggleShowDates }) => {
	const { isAdmin } = useBand();
	const { activeDate, updateActiveDate } = useDates();
	const { withActiveDate } = useDates();

	const handleSwitch = (e) => {
		updateActiveDate({ [e.target.name]: e.target.checked });
	};

	return withActiveDate(
		<Panel
			size={9}
			titleEl={
				<div>
					<IconButton onClick={toggleShowDates}>
						<KeyboardArrowLeft />
					</IconButton>
					<Typography variant='span'>
						{moment(activeDate?.date).format('dddd DD MMMM YYYY')}
					</Typography>
				</div>
			}
			actionBtn={
				<LabeledSwitch
					label='Show Day'
					name='is_show_day'
					checked={activeDate.is_show_day}
					onChange={handleSwitch}
				/>
			}
		>
			<Grid container spacing={1}>
				<SchedulePanel activeDate={activeDate} isAdmin={isAdmin} />
				{!activeDate.is_show_day && <DateDetailsPanel />}
				{/* {activeDate.is_show_day && <ProspectPanels />} */}
			</Grid>
		</Panel>,
	);
};

export default DatePanel;
