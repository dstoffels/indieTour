import React, { useState } from 'react';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const SHOW = 'show';
const OFF = 'off';
const TRAVEL = 'travel';
const SHOW_TYPES = [SHOW, OFF, TRAVEL];

const ShowTypeToggle = props => {
	const [type, setType] = useState(SHOW);
	const handleType = e => setType(e.target.value);

	const toggleBtns = SHOW_TYPES.map(sType => (
		<ToggleButton key={sType} value={sType}>
			{`${sType} DAY`}
		</ToggleButton>
	));

	return (
		<ToggleButtonGroup
			className='mb-3 d-flex justify-content-center'
			value={type}
			onChange={handleType}
			exclusive>
			{toggleBtns}
		</ToggleButtonGroup>
	);
};

export default ShowTypeToggle;
