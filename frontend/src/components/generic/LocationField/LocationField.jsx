import { Autocomplete, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';
import Map from '../Map/Map.jsx';

const LocationField = ({ label = '', initValue = '', canEdit }) => {
	const [value, setValue] = useState('');
	const [inputValue, setInputValue] = useState(initValue);
	const [options, setOptions] = useState([]);
	const [buffer, setBuffer] = useState(-1);
	const [isEditing, setIsEditing] = useState(false);
	const [locationData, setLocationData] = useState(null);

	const handleCancel = e => {
		setInputValue(initValue);
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
		setValue(e.target.value);
	};

	const handleInputChange = (e, newVal) => {
		setInputValue(newVal);
	};

	const autocompletePlaces = async (query = '') => {
		const config = getConfigObj();
		const response = await axios.get(endpoints.placesAutocomplete(query), config);
		const newOptions = response.data.predictions.map(({ description }) => description);
		setOptions(newOptions);
	};

	const fetchPlace = async (input = '') => {
		const config = getConfigObj();
		const response = await axios.get(endpoints.places(input), config);
		const data = response.data.candidates[0];
		setLocationData(data);
	};

	useEffect(() => {
		buffer && clearTimeout(buffer);

		const timeout = setTimeout(() => {
			autocompletePlaces(inputValue);
		}, 250);

		setBuffer(timeout);
	}, [inputValue]);

	useEffect(() => {
		fetchPlace(inputValue);
	}, [value]);

	return (
		<div onClick={handleClick}>
			<Stack spacing={1} className='edit-field'>
				{isEditing ? (
					<Autocomplete
						freeSolo
						autoComplete
						options={options}
						noOptionsText='No locations'
						value={value}
						onChange={handleChange}
						onInputChange={handleInputChange}
						filterOptions={o => o}
						filterSelectedOptions
						getOptionLabel={option => (typeof option === 'string' ? option : options[option])}
						renderInput={params => <TextField {...params} label={label} variant='standard' />}
					/>
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
