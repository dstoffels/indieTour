import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useStore from 'hooks/useStore.js';
import React, { useState } from 'react';
import withAuth from 'utils/withAuth.js';

const TourMenu = ({}) => {
	const { activeBand } = useStore();
	const tours = ['Tour 1', 'Tour 2', 'Tour 3'];
	const [tour, setTour] = useState(0);

	const options = activeBand?.tours?.map(({ name }) => name);

	const handleChange = e => setTour(e.target.value);
	return (
		<SelectMenu
			options={options}
			value={tour}
			onChange={handleChange}
			id='tour-select'
			label={activeBand?.name}
		/>
	);
};

export default withAuth(TourMenu);
