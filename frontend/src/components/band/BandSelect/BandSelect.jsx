import SelectMenu from 'components/generic/SelectMenu/SelectMenu.jsx';
import useStore from 'hooks/useStore.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveBand } from 'redux/bandSlice.js';
import withActiveBand from 'utils/withActiveBand.js';
import withAuth from 'utils/withAuth.js';

const BandSelect = ({}) => {
	const { store, activeBand } = useStore();
	const dispatch = useDispatch();
	const bands = store.userBands ? store.userBands : [];
	const options = bands.map(({ name }) => name);

	const handleChange = bandName => {
		const band = bands.find(({ name }) => bandName == name);
		dispatch(setActiveBand(band?.id));
	};

	return (
		<SelectMenu
			options={options}
			init={activeBand.name}
			keyName='name'
			onChange={handleChange}
			id='band-select'
			label='Active Band'
		/>
	);
};

export default withActiveBand(BandSelect);
