import { Grid } from '@mui/material';
import DateDetailsPanel from 'components/dates/DateDetailsPanel/DateDetailsPanel.jsx';
import ProspectPanel from 'components/dates/prospects/ProspectPanel/ProspectPanel.jsx';
import ProspectsListPanel from 'components/dates/prospects/ProspectsListPanel/ProspectsListPanel.jsx';
import SchedulePanel from 'components/dates/schedule/SchedulePanel/SchedulePanel.jsx';
import TourDetailsPanel from 'components/tour/TourDetailsPanel/TourDetailsPanel.jsx';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';
import useTour from 'hooks/useTour.js';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DatesPage = ({}) => {
	const { search } = useLocation();
	const searchParams = new URLSearchParams(search);
	const date_id = searchParams.get('date');

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

	const sidebarSize = 3;

	return withActiveTour(
		<Page>
			<TourDetailsPanel size={sidebarSize} />
			{/* {showDates && <DatesListPanel addTourDate={addTourDate} activeTour={activeTour} size={3} />} */}
			{activeDate && (
				<Grid item container spacing={1} xs={12 - sidebarSize}>
					<DateDetailsPanel showDates={showDates} toggleShowDates={toggleShowDates} />
					{activeDate.is_show_day && !activeDate.is_confirmed ? (
						<ProspectsListPanel />
					) : (
						<SchedulePanel />
					)}
				</Grid>
			)}
		</Page>,
	);
};

export default DatesPage;
