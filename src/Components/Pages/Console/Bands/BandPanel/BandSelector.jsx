import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import useUser from 'hooks/useUser.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import useBands from '../useBands.js';
import EditBandModalBtn from '../EditBandModal/EditBandModalBtn.jsx';
import NewBandModalBtn from '../NewBandModal/NewBandModalBtn.jsx';

const BandSelector = props => {
	const { user } = useUser();
	const { bands, selectBand } = useBands();
	const handleChange = bandName => selectBand(bandName);

	if (user && bands.length) {
		return (
			<>
				<h6 className='panel-header'>Active Band</h6>
				<div className='d-flex justify-content-center'>
					<Selector
						onChange={handleChange}
						id='band-selector'
						options={bands}
						nameKey='bandName'
						defaultSelection={user.activeMember}
					/>
					<div className='d-flex ms-3'>
						<EditBandModalBtn />
						<NewBandModalBtn />
					</div>
				</div>
			</>
		);
	}
	return null;
};

export default withAuthentication(BandSelector);
