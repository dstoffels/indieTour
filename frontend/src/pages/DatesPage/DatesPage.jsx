import DatePanel from 'components/dates/DatePanel/DatePanel.jsx';
import DatesListPanel from 'components/dates/DatesListPanel/DatesListPanel.jsx';
import Panel from 'components/generic/Panel/Panel.jsx';
import TourSelect from 'components/nav/TourSelect/TourSelect.jsx';
import Page from 'pages/Page/Page.jsx';
import React, { useEffect } from 'react';
import withActiveTour from 'utils/withActiveTour.js';

const DatesPage = ({ activeTour, addTourDate, isAdmin, isOwner }) => {
	return (
		<Page select={<TourSelect />}>
			<Page.SplitBody>
				<DatesListPanel addTourDate={addTourDate} activeTour={activeTour} size={3} />
				<DatePanel isAdmin={isAdmin} />
			</Page.SplitBody>
		</Page>
	);
};

export default withActiveTour(DatesPage);
