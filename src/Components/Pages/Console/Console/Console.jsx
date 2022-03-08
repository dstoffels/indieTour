import { Container } from '@mui/material';
import React from 'react';
import { CONSOLE } from '../../../../constants/routes.js';
import useNav from '../../../../hooks/usePrevPage.js';
import withAuthentication from '../../../Auth/Authentication/withAuthentication.jsx';
import BandMembers from '../Bands/BandInfo/BandMembers/BandMembers.jsx';
import BandSelector from '../Bands/BandSelector/BandSelector.jsx';
import './Console.css';

const Console = props => {
	useNav(CONSOLE);
	return (
		<div className='text-center'>
			<h2 className='panel-header'>MY BANDS</h2>
			<BandSelector />
			<BandMembers />
			Danger Zone (delete band)
			<h2 className='panel-header'>MY TOURS</h2>
		</div>
	);
};

export default withAuthentication(Console);
