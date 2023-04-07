import { Grid } from '@mui/material';
import DateDetailsPanel from 'components/dates/DateDetailsPanel/DateDetailsPanel.jsx';
import DatePanel from 'components/dates/DatePanel/DatePanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import SchedulePanel from 'components/dates/schedule/SchedulePanel/SchedulePanel.jsx';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';
import useTour from 'hooks/useTour.js';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DatesPage = ({}) => {
	const { date_id } = useParams();

	const { activeBand, fetchUserActiveBand, isAdmin } = useBand();
	const { activeTour, withActiveTour, fetchUserActiveTour } = useTour();
	const { activeDate, setActiveDate, getTourDate, addTourDate } = useDates();
	const [showDates, setShowDates] = useState(true);
	const toggleShowDates = () => setShowDates(!showDates);

	useEffect(() => {
		date_id && getTourDate(date_id);
	}, [date_id]);

	useEffect(() => {
		!activeBand && fetchUserActiveBand();
		!activeTour && fetchUserActiveTour();
	}, []);

	return withActiveTour(
		<Page>
			{showDates && <DatesListPanel addTourDate={addTourDate} activeTour={activeTour} size={3} />}
			{activeDate && (
				<Grid item container spacing={1} xs={showDates ? 9 : 12}>
					<DateDetailsPanel showDates={showDates} toggleShowDates={toggleShowDates} />
					<SchedulePanel activeDate={activeDate} isAdmin={isAdmin} />
					<SchedulePanel activeDate={activeDate} isAdmin={isAdmin} />
				</Grid>
			)}
		</Page>,
	);
};

export default DatesPage;
