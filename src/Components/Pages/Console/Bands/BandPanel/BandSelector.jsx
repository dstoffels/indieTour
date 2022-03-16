import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useUser from 'hooks/useUser.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import useBands from '../useBands.js';
import EditBandModalBtn from '../EditBandModal/EditBandModalBtn.jsx';

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
