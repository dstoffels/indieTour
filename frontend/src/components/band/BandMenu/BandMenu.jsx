import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useStore from 'hooks/useStore.js';
import { useState } from 'react';

const BandMenu = ({}) => {
	const { store } = useStore();
	const bands = store.userBands ? store.userBands : [];
	const options = bands.map(({ name }) => name);

	const [band, setBand] = useState(0);
	const handleChange = e => setBand(e.target.value);

	return (
		<SelectMenu
			options={options}
			value={band}
			onChange={handleChange}
			id='band-select'
			label='My Bands'
		/>
	);
};

export default BandMenu;
