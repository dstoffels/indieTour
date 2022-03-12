import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectBand } from 'redux/bandsSlice.js';
import './BandSelector.css';

// TODO: must somehow store currentband with user, generate user collection in firestore?

const BandSelector = props => {
	const dispatch = useDispatch();
	const { userBands } = useSelector(state => state.band);
	const handleChange = bandName => dispatch(selectBand(bandName));

	return (
		<Selector
			onChange={handleChange}
			id='band-selector'
			options={userBands}
			nameKey='bandName'
			defaultSelection={userBands[0]?.bandName}
		/>
	);
};

export default BandSelector;
