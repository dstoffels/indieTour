import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useBand from 'hooks/useBand.js';
import { useEffect, useState } from 'react';

const BandSelect = ({}) => {
	const { activeBand, fetchUserBands, setUserActiveBand } = useBand();
	const [bands, setBands] = useState([]);

	useEffect(() => {
		fetchUserBands(setBands);
	}, [activeBand]);

	const options = bands.map(({ name }) => name);

	const handleChange = (bandName) => {
		const band = bands.find(({ name }) => bandName == name);
		setUserActiveBand(band.id);
	};

	return (
		<SelectMenu
			options={options}
			init={activeBand?.name}
			keyName='name'
			onChange={handleChange}
			id='band-select'
			label='My Bands'
		/>
	);
};

export default BandSelect;
