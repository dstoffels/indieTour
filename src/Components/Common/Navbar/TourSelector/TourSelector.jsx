import Selector from 'Components/Common/Selector/Selector.jsx';
import React from 'react';
import './TourSelector.css';

const TourSelector = props => {
	const tour = { name: 'tour1' };
	return <Selector id='tour-selector' options={[tour]} nameKey='name' defaultSelection={tour} />;
};

export default TourSelector;
