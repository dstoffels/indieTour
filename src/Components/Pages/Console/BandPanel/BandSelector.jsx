import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useUser from 'hooks/useUser.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import useBands from '../Bands/useBands.js';
import EditBandModalBtn from '../Bands/EditBandModal/EditBandModalBtn.jsx';

const BandSelector = props => {
	const { user } = useUser();
	const { bands, selectBand } = useBands();
	const handleChange = bandName => selectBand(bandName);

	return (
		<div className='d-flex justify-content-center'>
			<Selector
				onChange={handleChange}
				id='band-selector'
				options={bands}
				nameKey='bandName'
				defaultSelection={user.activeMember}
			/>
			<EditBandModalBtn />
		</div>
	);
};

export default withAuthentication(BandSelector);
