import DatePanel from 'components/dates/DatePanel/DatePanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import TourSelect from 'components/TourSelect/TourSelect.jsx';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DatesPage = ({}) => {
	const { date_id } = useParams();
	const [activeDate, setActiveDate] = useState(null);

	const { isAdmin, isOwner } = useBand();
	const { activeTour, getTourDate, createTourDate } = useDates();

	useEffect(() => {
		date_id && getTourDate(date_id, setActiveDate);
	}, [date_id]);

	return (
		<Page select={<TourSelect />}>
			<Page.SplitBody>
				<DatesListPanel addTourDate={createTourDate} activeTour={activeTour} size={3} />
				{activeDate && (
					<DatePanel activeDate={activeDate} isAdmin={isAdmin} activeTour={activeTour} />
				)}
			</Page.SplitBody>
		</Page>
	);
};

export default DatesPage;
