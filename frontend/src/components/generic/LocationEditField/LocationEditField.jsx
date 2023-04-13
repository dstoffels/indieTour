import React, { useEffect, useRef, useState } from 'react';
import LocationField from '../LocationField/LocationField.jsx';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Check } from '@mui/icons-material';
import useBand from 'hooks/useBand.js';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import useAPI from 'hooks/useAPI.js';

const LocationEditField = ({ initValue, onSubmit, label = 'Location' }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [place, setPlace] = useState(initValue);
	const { isAdmin } = useBand();

	const api = useAPI();

	const handleSubmit = (e) => {
		e.preventDefault();
		api.gapi.maps.place.details.get(place?.place_id, (responseData) => {
			const place_details = responseData.result;
			place_details.description = place.description;
			onSubmit(place_details);
		});
		setIsEditing(false);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setPlace(initValue);
	};

	useEscKey(handleCancel);

	const ref = useRef(null);
	const [handleClose, handleOpen] = useOutsideClick(ref, handleCancel);

	const handleClick = () => setIsEditing(true);

	let className = isAdmin ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	useEffect(() => {
		setPlace(initValue);
	}, [isEditing]);

	return (
		<Box ref={ref} onClick={handleClick} className={className}>
			{isEditing ? (
				<Box padding={2}>
					<form onSubmit={handleSubmit}>
						<Stack direction='row' justifyContent='space-between' alignItems='center'>
							<LocationField
								required
								label={label}
								value={place}
								onSelect={setPlace}
								onOpen={handleOpen}
								onClose={handleClose}
							/>
							<IconButton
								disabled={initValue?.description === place?.description}
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
					<Typography>{initValue?.description}</Typography>
				</Stack>
			)}
		</Box>
	);
};

export default LocationEditField;
