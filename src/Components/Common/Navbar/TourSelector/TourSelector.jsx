import Selector from 'Components/Common/Selector/Selector.jsx';
import React from 'react';
import './TourSelector.css';

const TourSelector = props => {
	return (
		<Selector
			id='tour-selector'
			options={[{ name: 'tour1' }]}
			nameKey='name'
			defaultSelection={'tour1'}
		/>
	);
};

export default TourSelector;
