import React from 'react';
import Selector from '../../../../Common/Selector/Selector.jsx';
import { useSelector } from 'react-redux';
import './BandSelector.css';

// TODO: must somehow store currentband with user, generate user collection in firestore?
const BandSelector = props => {
	const { userBands } = useSelector(state => state.band);

	return (
		Boolean(userBands.length) && (
			<Selector
				id='band-selector'
				options={userBands}
				nameKey='bandName'
				defaultSelection={userBands[0].bandName}
			/>
		)
	);
};

export default BandSelector;
