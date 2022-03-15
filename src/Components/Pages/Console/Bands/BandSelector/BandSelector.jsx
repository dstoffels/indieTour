import React from 'react';
import Selector from 'Components/Common/Selector/Selector.jsx';
import { useSelector } from 'react-redux';
import useUser from 'hooks/useUser.js';
import withAuthentication from 'Components/Auth/Authentication/withAuthentication.jsx';
import { Col, Row } from 'react-bootstrap';
import { Fab, Tooltip } from '@mui/material';
import { Add } from '@mui/icons-material';
import BandModalBtn from '../NewBand/BandModal/BandModalBtn.jsx';

const BandSelector = props => {
	const { user, selectBand } = useUser();
	const { bands } = useSelector(state => state);
	const handleChange = bandName => selectBand(bandName);

	try {
		return (
			<Row>
				<Col xs={10}>
					<Selector
						onChange={handleChange}
						id='band-selector'
						options={bands}
						nameKey='bandName'
						defaultSelection={user.activeMember}
					/>
				</Col>
				<Col xs={2}>
					<BandModalBtn />
				</Col>
			</Row>
		);
	} catch {
		return null;
	}
};

export default withAuthentication(BandSelector);
