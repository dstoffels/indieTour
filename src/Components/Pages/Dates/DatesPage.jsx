import { Grid } from '@mui/material';
import Page from 'Components/Common/Page/Page.jsx';
import { CONSOLE } from 'constants/routes.js';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';
import useTours from '../Console/Tours/useTours.js';
import DateDetailsPanel from './DateDetailsPanel/DateDetailsPanel.jsx';
import DatesPanel from './DatesPanel/DatesPanel.jsx';

const DatesPage = props => {
	const navigate = useNavigate();
	const { activeTour } = useTours();

	useEffect(() => {
		!activeTour && navigate(CONSOLE);
	}, []);

	return (
		<Page>
			<DatesPanel />
			<DateDetailsPanel />
		</Page>
	);
};

export default withAuthentication(DatesPage);
