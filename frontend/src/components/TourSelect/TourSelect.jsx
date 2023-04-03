import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import { useGlobalState } from 'context/GlobalStateContext.js';
import React from 'react';

const TourSelect = ({}) => {
	const { activeBand, activeTour } = useGlobalState();
	const tours = activeBand?.tours ? activeBand.tours : [];
	const options = tours.map(({ name }) => name);

	const handleChange = (tourName) => {
		const tour = tours.find(({ name }) => tourName == name);
	};

	return (
		<SelectMenu
			init={activeTour ? activeTour.name : ''}
			options={options}
			onChange={handleChange}
			id='tour-select'
			label={activeTour ? activeBand?.name : 'Select a tour'}
		/>
	);
};

export default TourSelect;
