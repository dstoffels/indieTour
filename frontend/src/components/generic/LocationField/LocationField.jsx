import { Check } from '@mui/icons-material';
import { Autocomplete, IconButton, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';
import Map from '../Map/Map.jsx';

const LocationField = ({ label = '', initValue = '', canEdit, onSubmit }) => {
	const [value, setValue] = useState(initValue);
	const [location, setLocation] = useState(initValue);
	const [options, setOptions] = useState([]);
	const [buffer, setBuffer] = useState(-1);
	const [isEditing, setIsEditing] = useState(false);
	const [locationData, setLocationData] = useState(null);

	const handleCancel = e => {
		setIsEditing(false);
	};

	useEscKey(handleCancel);

	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, handleCancel);

	const handleClick = () => {
		canEdit && setIsEditing(true);
	};

	const handleChange = (e, newVal) => {
		setOptions(newVal ? [newVal, ...options] : options);
		setValue(newVal);
	};

	const handleInputChange = (e, newVal) => {
		setLocation(newVal);
	};

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ location });
		handleCancel();
	};

	const autocompletePlaces = async (query = '') => {
		const config = getConfigObj();
		const response = await axios.get(endpoints.placesAutocomplete(query), config);
		const newOptions = response.data.predictions;
		setOptions(newOptions);
	};

	const fetchPlace = async (places_id = '') => {
		const config = getConfigObj();
		const response = await axios.get(endpoints.places(places_id), config);
		const data = response.data.candidates[0];
		setLocationData(data);
	};

	useEffect(() => {
		buffer && clearTimeout(buffer);

		const timeout = setTimeout(() => {
			autocompletePlaces(location);
		}, 250);

		setBuffer(timeout);
	}, [location]);

	useEffect(() => {
		fetchPlace(location);
	}, [value]);

	useEffect(() => {
		setValue(initValue);
		setLocation(initValue);
		fetchPlace(value);
	}, [isEditing]);

	return (
		<div onClick={handleClick}>
			<Stack spacing={1} className='edit-field'>
				{isEditing ? (
					<form onSubmit={handleSubmit}>
						<Stack direction='row'>
							<Autocomplete
								freeSolo
								fullWidth
								autoComplete
								options={options}
								noOptionsText='No locations'
								value={value}
								onChange={handleChange}
								onInputChange={handleInputChange}
								filterOptions={o => o}
								filterSelectedOptions
								getOptionLabel={option =>
									typeof option === 'string' ? option : option.description
								}
								renderInput={params => (
									<TextField
										{...params}
										autoFocus
										label={label}
										value={location}
										variant='standard'
									/>
								)}
							/>
							<IconButton
								disabled={initValue === location}
								color='success'
								type='submit'
								onClick={e => e.stopPropagation()}>
								<Check />
							</IconButton>
						</Stack>
					</form>
				) : (
					<div>
						<Typography variant='overline' color='primary'>
							{label}
						</Typography>
						<Typography>{initValue}</Typography>
					</div>
				)}
				<Map data={locationData} />
			</Stack>
		</div>
	);
};

export default LocationField;
