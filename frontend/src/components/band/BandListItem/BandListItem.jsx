import { Typography } from '@mui/material';
import ListPanelItem from 'components/generic/ListPanelItem/ListPanelItem.jsx';
import React from 'react';

const BandListItem = ({ band, activeBand, setActiveband }) => {
	const handleClick = () => {
		setActiveband(band.id);
	};

	return (
		<ListPanelItem
			key={`band-${band.id}`}
			onClick={handleClick}
			active={band.id === activeBand?.id}>
			<Typography variant='h6' color={band?.id === activeBand?.id ? 'primary' : ''}>
				{band.name}
			</Typography>
		</ListPanelItem>
	);
};

export default BandListItem;
