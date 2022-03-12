import React from 'react';
import Selector from '../../../../Common/Selector/Selector.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { selectBand } from '../../../../../Redux/bandsSlice.js';
import './BandSelector.css';
import { Button } from '@mui/material';

// TODO: must somehow store currentband with user, generate user collection in firestore?

const BandSelector = props => {
	const dispatch = useDispatch();
	const { userBands } = useSelector(state => state.band);
	const handleChange = bandName => dispatch(selectBand(bandName));

	const options = [<Button>New Band</Button>, ...userBands];

	return (
		<Selector
			onChange={handleChange}
			id='band-selector'
			options={options}
			nameKey='bandName'
			defaultSelection={userBands[0]?.bandName}
		/>
	);
};

export default BandSelector;
