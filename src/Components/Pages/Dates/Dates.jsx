import { Container } from '@mui/material';
import React from 'react';
import { DATES } from '../../../constants/routes.js';
import useNav from '../../../hooks/usePrevPage.js';
import withAuthentication from '../../Auth/Authentication/withAuthentication.jsx';

const Dates = props => {
	useNav(DATES);
	return (
		<Container>
			<h1>Dates</h1>
		</Container>
	);
};

export default withAuthentication(Dates);
