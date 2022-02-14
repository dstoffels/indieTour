import React from 'react';
import Header from '../Header/Header.jsx';
import Schedule from '../Schedule/Schedule.jsx';

const Today = props => {
	return (
		<div>
			<Header>
				<strong>Today's Date & event title/venue name</strong>
			</Header>
			<li>shown as landing page if today has a confirmed date</li>
			<Schedule />
		</div>
	);
};

export default Today;
