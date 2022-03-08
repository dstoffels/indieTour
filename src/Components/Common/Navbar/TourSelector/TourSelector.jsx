import { MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import './TourSelector.css';
import Selector from '../../Selector/Selector.jsx';

const TourSelector = props => {
	return (
		<Selector
			id='tour-selector'
			options={[{ name: 'tour1' }]}
			nameKey='name'
			defaultSelection={'tour1'}
		/>
	);
};

export default TourSelector;
