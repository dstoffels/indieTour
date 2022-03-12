import { Container, Stack } from '@mui/material';
import React from 'react';
import { CONSOLE } from '../../../../constants/routes.js';
import useNav from '../../../../hooks/usePrevPage.js';
import withAuthentication from '../../../Auth/Authentication/withAuthentication.jsx';
import BandMembers from '../Bands/BandInfo/BandMembers/BandMembers.jsx';
import BandSelector from '../Bands/BandSelector/BandSelector.jsx';
import NewBandForm from '../Bands/NewBandForm/NewBandForm.jsx';
import './Console.css';

const Console = props => {
	useNav(CONSOLE);
	return (
		<div className=''>
			<h2 className='panel-header'>MY BANDS</h2>
			<Stack marginX='auto' className='mobile-max-w'>
				<BandSelector />
				<BandMembers />
				<NewBandForm />
				Danger Zone (delete band)
			</Stack>
			<h2 className='panel-header'>MY TOURS</h2>
		</div>
	);
};

export default withAuthentication(Console);
