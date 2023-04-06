import MenuButton from '../MenuButton/MenuButton.jsx';
import React, { useEffect, useState } from 'react';
import useBand from 'hooks/useBand.js';
import useTour from 'hooks/useTour.js';
import NewTourForm from 'components/forms/tour/NewTourForm/NewTourForm.jsx';

const TourMenu = ({}) => {
	const { activeBand, withActiveBand } = useBand();
	const { activeTour, fetchBandTours, fetchUserActiveTour, setUserActiveTour } = useTour();
	const [tours, setTours] = useState([]);

	useEffect(() => {
		fetchBandTours(setTours);
	}, [activeBand, activeTour]);

	useEffect(() => {
		fetchUserActiveTour();
	}, [activeBand]);

	const handleClick = (tour) => {
		setUserActiveTour(tour.id);
	};

	return withActiveBand(
		tours.length && activeTour ? (
			<MenuButton
				btnTxt={activeTour.name}
				actionBtn={<NewTourForm />}
				onClick={handleClick}
				menuTxtKey='name'
				items={tours}
			/>
		) : (
			<NewTourForm />
		),
	);
};

export default TourMenu;
