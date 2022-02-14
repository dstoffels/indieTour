import React from 'react';

import './Event.css';

const Event = ({ item }) => {
	const { startTime, endTime, description, address } = item;
	return (
		<div className='event'>
			<div>
				<div>
					{startTime}
					{endTime ? ` - ${endTime}` : <></>}
				</div>
				<div>
					<strong>{description}</strong>
				</div>
			</div>
			<div>
				<a href='#'>
					<h1>
						<i className='bi bi-geo-alt-fill'></i>
					</h1>
				</a>
			</div>
		</div>
	);
};

export default Event;
