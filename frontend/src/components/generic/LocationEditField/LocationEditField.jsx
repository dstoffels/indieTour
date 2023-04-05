import React, { useState } from 'react';
import LocationField from '../LocationField/LocationField.jsx';
import { IconButton, Stack, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';
import useBand from 'hooks/useBand.js';
import useCtrlEnterKeys from 'hooks/useCtrlEnterKeys.js';
import useEscKey from 'hooks/useEscKey.js';

const LocationEditField = ({ initValue, onSubmit }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [place, setPlace] = useState({ description: initValue });
	const { isAdmin } = useBand();

	console.log(place);

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(place || { description: '' });
		setIsEditing(false);
	};

	useEscKey(() => setIsEditing(false));

	const handleClick = () => setIsEditing(true);

	let className = isAdmin ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	return (
		<div onClick={handleClick} className={className}>
			{isEditing ? (
				<form onSubmit={handleSubmit}>
					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						<LocationField value={place} onSelect={setPlace} />
						<IconButton
							disabled={initValue === place?.description}
							color='success'
							type='submit'
							onClick={(e) => e.stopPropagation()}
						>
							<Check />
						</IconButton>
					</Stack>
				</form>
			) : (
				<Stack>
					<Typography color='primary' variant='overline'>
						Location
					</Typography>
					<Typography>{initValue}</Typography>
				</Stack>
			)}
		</div>
	);
};

export default LocationEditField;
