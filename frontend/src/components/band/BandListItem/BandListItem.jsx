import { Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import React from 'react';

const BandListItem = ({ band, activeBand, setActiveband }) => {
	const handleClick = () => {
		setActiveband(band.id);
	};

	return (
		<PanelListItem
			key={`band-${band.id}`}
			onClick={handleClick}
			active={band.id === activeBand?.id}>
			<Typography variant='h6' color={band?.id === activeBand?.id ? 'primary' : ''}>
				{band.name}
			</Typography>
		</PanelListItem>
	);
};

export default BandListItem;
