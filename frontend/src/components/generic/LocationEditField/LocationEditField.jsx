import React, { useEffect, useRef, useState } from 'react';
import LocationField from '../LocationField/LocationField.jsx';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';
import useBand from 'hooks/useBand.js';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';

const LocationEditField = ({ initValue, onSubmit, label = 'Location' }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [place, setPlace] = useState({ description: initValue });
	const { isAdmin } = useBand();

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(place || { description: '' });
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setPlace({ description: initValue });
	};

	useEscKey(handleCancel);

	const ref = useRef(null);
	const [handleClose, handleOpen] = useOutsideClick(ref, handleCancel);

	const handleClick = () => setIsEditing(true);

	let className = isAdmin ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	useEffect(() => {
		setPlace({ description: initValue });
	}, [isEditing]);

	return (
		<Box ref={ref} onClick={handleClick} className={className}>
			{isEditing ? (
				<Box padding={2}>
					<form onSubmit={handleSubmit}>
						<Stack direction='row' justifyContent='space-between' alignItems='center'>
							<LocationField
								label={label}
								value={place}
								onSelect={setPlace}
								onOpen={handleOpen}
								onClose={handleClose}
							/>
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
				</Box>
			) : (
				<Stack paddingX={2}>
					<Typography color='primary' variant='overline'>
						{label}
					</Typography>
					<Typography>{initValue}</Typography>
				</Stack>
			)}
		</Box>
	);
};

export default LocationEditField;
