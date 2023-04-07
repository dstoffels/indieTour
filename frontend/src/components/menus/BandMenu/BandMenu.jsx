import MenuButton from '../MenuButton/MenuButton.jsx';
import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import React, { useEffect, useState } from 'react';
import useBand from 'hooks/useBand.js';
import useDates from 'hooks/useDates.js';

const BandMenu = ({}) => {
	const { activeBand, fetchUserBands, setUserActiveBand, withActiveBand } = useBand();
	const { setActiveDate } = useDates();
	const [userBands, setUserBands] = useState([]);

	useEffect(() => {
		fetchUserBands(setUserBands);
	}, [activeBand]);

	const handleClick = (band) => {
		if (activeBand.id !== band.id) {
			setUserActiveBand(band.id);
			setActiveDate(null);
		}
	};

	return withActiveBand(
		activeBand ? (
			<MenuButton
				btnTxt={activeBand.name}
				actionBtn={<NewBandForm />}
				onClick={handleClick}
				menuTxtKey='name'
				items={userBands}
			/>
		) : (
			<NewBandForm />
		),
	);
};

export default BandMenu;
