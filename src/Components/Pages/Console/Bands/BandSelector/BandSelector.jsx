<<<<<<< Updated upstream
import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { selectBand } from '../../../../../Redux/bandsSlice.js';
=======
import { selectBand } from 'redux/bandsSlice.js';
>>>>>>> console
import './BandSelector.css';

// TODO: must somehow store currentband with user, generate user collection in firestore?
=======
import React, { useEffect } from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import { useSelector } from 'react-redux';
import useUser from 'hooks/useUser.js';
>>>>>>> Stashed changes

const BandSelector = props => {
	const { user, selectBand } = useUser();
	const { bands } = useSelector(state => state);
	const handleChange = bandName => selectBand(bands.find(band => band.bandName === bandName));

	return (
		<Selector
			onChange={handleChange}
			id='band-selector'
<<<<<<< Updated upstream
			options={userBands}
=======
<<<<<<< Updated upstream
			options={options}
=======
			options={Boolean(bands) && bands}
>>>>>>> Stashed changes
>>>>>>> Stashed changes
			nameKey='bandName'
			defaultSelection={user.activeMember}
		/>
	);
};

export default BandSelector;
