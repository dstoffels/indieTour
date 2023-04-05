import DatePanel from 'components/dates/DatePanel/DatePanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import TourSelect from 'components/TourSelect/TourSelect.jsx';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';
import useTour from 'hooks/useTour.js';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DatesPage = ({}) => {
	const { date_id } = useParams();

	const { activeBand, fetchUserActiveBand } = useBand();
	const { activeTour, withActiveTour, fetchUserActiveTour } = useTour();
	const { activeDate, getTourDate, addTourDate } = useDates();

	useEffect(() => {
		date_id && getTourDate(date_id);
	}, [date_id]);

	useEffect(() => {
		!activeBand && fetchUserActiveBand();
		!activeTour && fetchUserActiveTour();
	}, []);

	return withActiveTour(
		<Page select={<TourSelect />}>
			<Page.SplitBody>
				<DatesListPanel addTourDate={addTourDate} activeTour={activeTour} size={3} />
				{activeDate && <DatePanel activeDate={activeDate} activeTour={activeTour} />}
			</Page.SplitBody>
		</Page>,
	);
};

export default DatesPage;
