import useBand from 'hooks/useBand.js';
import React from 'react';
import BandForm from '../BandForm/BandForm.jsx';

const NewBandFormOLD = ({}) => {
	const { createNewBand } = useBand();

	return <BandForm title='New Band' submitText='Create Band' onSubmit={createNewBand} />;
};

export default NewBandFormOLD;