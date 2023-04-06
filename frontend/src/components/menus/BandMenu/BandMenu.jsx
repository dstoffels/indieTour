import MenuButton from '../MenuButton/MenuButton.jsx';
import NewBandForm from 'components/forms/band/NewBandForm/NewBandForm.jsx';
import React, { useEffect, useState } from 'react';
import useBand from 'hooks/useBand.js';

const BandMenu = ({}) => {
	const { activeBand, fetchUserBands, setUserActiveBand, withActiveBand } = useBand();
	const [userBands, setUserBands] = useState([]);

	useEffect(() => {
		fetchUserBands(setUserBands);
	}, [activeBand]);

	const handleClick = (band) => {
		setUserActiveBand(band.id);
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
