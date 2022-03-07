import { Container } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CONSOLE } from '../../../../constants/routes.js';
import useNav from '../../../../hooks/usePrevPage.js';
import withAuthentication from '../../../Auth/Authentication/withAuthentication.jsx';
import { fetchUserBands } from '../Bands/BandSelector/bandsSlice.js';

const Console = props => {
	useNav(CONSOLE);
	const dispatch = useDispatch();
	dispatch(fetchUserBands());
	return (
		<Container>
			<h2>My bands</h2>
		</Container>
	);
};

export default withAuthentication(Console);
