import useTour from 'hooks/useTour.js';
import React, { useEffect } from 'react';

const TourPage = ({}) => {
	const { fetchActiveTour, activeTour } = useTour();

	useEffect(() => {
		fetchActiveTour();
	}, []);

	return <div></div>;
};

export default TourPage;
