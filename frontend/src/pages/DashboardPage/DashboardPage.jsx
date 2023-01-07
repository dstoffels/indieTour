import React, { useState } from 'react';
import { useEffect } from 'react';
import BandPanel from 'components/band/BandPanel/BandPanel.jsx';
import useThunkDispatch from 'hooks/useThunkDispatch.js';
import { Typography } from '@mui/material';

const DashboardPage = ({}) => {
	return (
		<>
			<BandPanel />
		</>
	);
};

export default DashboardPage;
