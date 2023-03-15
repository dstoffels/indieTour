import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useBand from 'hooks/useBand.js';
import { useDispatch } from 'react-redux';
import { setActiveBandThunk } from 'redux/bandSlice.js';

const BandSelect = ({}) => {
	const { activeBand, userBands } = useBand();
	const dispatch = useDispatch();
	const bands = userBands ? userBands : [];
	const options = bands.map(({ name }) => name);

	const handleChange = bandName => {
		const band = bands.find(({ name }) => bandName == name);
		dispatch(setActiveBandThunk(band?.id));
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
