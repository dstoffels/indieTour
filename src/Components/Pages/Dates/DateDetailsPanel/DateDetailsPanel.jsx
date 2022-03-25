import { Delete, Save } from '@mui/icons-material';
import { Button, Stack } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import useWindow from 'hooks/useWindow.js';
import React, { useState } from 'react';
import useDates from '../useDates.js';
import DateDetails from './DateDetails/DateDetails.jsx';
import DateDetailsTabs, { DateTabPanel } from './DateDetailsTabs.jsx';
import DeleteDateModalBtn from './DeleteDateModal/DeleteDateModalBtn.jsx';
import EditModeSwitch from './EditModeSwitch.jsx';
import SaveDateBtn from './SaveDateBtn.jsx';
import Schedule from './Schedule/Schedule.jsx';

const DateDetailsPanel = () => {
	// TODO: use screensize to determine if shown vs. dialog
	const { screenX } = useWindow();

	const [tabIndex, setTabIndex] = useState(0);

	const { activeDate, editing: editMode, editActiveDate } = useDates();

	const actions = (
		<Stack direction='row' spacing={3}>
			{editMode && (
				<>
					<SaveDateBtn />
					<DeleteDateModalBtn />
				</>
			)}
			<EditModeSwitch />
		</Stack>
	);

	if (activeDate) {
		return (
			<Panel title={`${activeDate?.date}\n${activeDate.title}`} actions={actions}>
				<DateDetailsTabs value={tabIndex} onChange={setTabIndex} />
				<div style={{ margin: '0 -0.5rem', overflowY: 'auto', height: '60.6vh' }}>
					<div style={{ margin: '0.5rem' }}>
						<DateTabPanel value={tabIndex} i={0}>
							<DateDetails
								activeDate={activeDate}
								editMode={editMode}
								editActiveDate={editActiveDate}
							/>
						</DateTabPanel>
						<DateTabPanel value={tabIndex} i={1} slideDirection='right'>
							<Schedule tourDate={activeDate} />
						</DateTabPanel>
					</div>
				</div>
			</Panel>
		);
	}
	return null;
};

export default DateDetailsPanel;
