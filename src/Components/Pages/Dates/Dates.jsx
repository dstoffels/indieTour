import { Container } from '@mui/material';
import Page from 'Components/Common/Page/Page.jsx';
import React from 'react';
import { DATES } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Dates = props => {
	// useNav(DATES);
	return (
		<Page>
			<h1>Dates</h1>
		</Page>
	);
};

export default withAuthentication(Dates);
