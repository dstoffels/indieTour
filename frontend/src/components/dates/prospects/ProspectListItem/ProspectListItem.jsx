import { FormControl, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import useProspect from 'hooks/useProspect.js';
import React, { useState } from 'react';

const ProspectListItem = ({ prospect, onChange }) => {
	const { setActiveProspect, updateProspect } = useProspect();

	const colors = ['', 'orange', 'secondary', 'error', 'green', 'primary'];

	const options = prospect.status_choices.map((choice, i) => (
		<MenuItem key={`prospect-choice-${choice}-${i}`} value={choice}>
			<Typography color={colors[i]}>{choice}</Typography>
		</MenuItem>
	));

	const handleStatus = (e) => {
		updateProspect(prospect.id, { status: e.target.value }, onChange);
	};

	const handleClick = () => {
		setActiveProspect(prospect);
	};

	return (
		<PanelListItem onClick={handleClick}>
			<Stack spacing={1} direction='row' justifyContent='space-between' alignItems='center'>
				<Stack>
					<Typography fontWeight={600}>{prospect.venue.name}</Typography>
					<Typography variant='caption'>{prospect.venue.formatted_address}</Typography>
				</Stack>
				<div className='flex-grow'>
					<Select fullWidth variant='standard' value={prospect.status} onChange={handleStatus}>
						{options}
					</Select>
				</div>
			</Stack>
		</PanelListItem>
	);
};

export default ProspectListItem;
