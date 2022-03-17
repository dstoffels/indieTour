import { Divider } from '@mui/material';
import Panel from 'Components/Common/Panel/Panel.jsx';
import useTours from 'Components/Pages/Console/Tours/useTours.js';
import React from 'react';
import TourSelector from '../TourSelector/TourSelector.jsx';
import TourInfo from './TourInfo/TourInfo.jsx';

const TourPanel = props => {
	const { tours } = useTours();

	return (
		<Panel title='Tour'>
			<TourInfo />
			<Panel.Divider />
			<TourSelector />
		</Panel>
	);
};

export default TourPanel;
