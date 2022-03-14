import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import { useSelector } from 'react-redux';
import useUser from 'hooks/useUser.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';

const BandSelector = props => {
	const { user, selectBand } = useUser();
	const { bands } = useSelector(state => state);
	const handleChange = bandName => selectBand(bands.find(band => band.bandName === bandName));

	try {
		return (
			<Selector
				onChange={handleChange}
				id='band-selector'
				options={bands}
				nameKey='bandName'
				defaultSelection={user.activeMember}
			/>
		);
	} catch {
		return null;
	}
};

export default withAuthentication(BandSelector);
