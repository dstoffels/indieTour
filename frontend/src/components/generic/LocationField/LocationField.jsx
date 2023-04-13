import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { useDebounce } from 'use-debounce';
import useAPI from 'hooks/useAPI.js';
import parse from 'autosuggest-highlight/parse';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

const initialValue = {
	description: '',
};

const LocationField = ({
	value,
	onSelect = (option) => {},
	onOpen,
	onClose,
	required,
	label = 'Location',
	name = 'location',
}) => {
	value = value ?? initialValue;
	console.log(value);
	const [inputValue, setInputValue] = useState(value.description);
	const [options, setOptions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [debouncedInputValue] = useDebounce(inputValue, 300);

	const api = useAPI();

	const handleInputChange = (event) => {
		setInputValue(event ? event.target.value : '');
	};

	const handleOptionSelect = (option) => {
		// option = options.includes(option) ? option : options[0];
		setInputValue(option ? option.description : '');
		onSelect(option);
	};

	const fetchOptions = () => {
		try {
			setLoading(true);
			api.gapi.maps.place.autocomplete.get(debouncedInputValue, (data) =>
				setOptions(data.predictions),
			);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchOptions();
	}, [debouncedInputValue]);

	return (
		<Autocomplete
			freeSolo
			fullWidth
			// value={value}
			options={options}
			getOptionLabel={(option) => option.description ?? ''}
			filterOptions={(o) => o}
			loading={loading}
			inputValue={inputValue}
			onInputChange={handleInputChange}
			onChange={(event, option) => handleOptionSelect(option)}
			onOpen={onOpen}
			onClose={onClose}
			clearOnEscape={true}
			renderInput={(params) => (
				<TextField
					{...params}
					required={required}
					label={label}
					variant='standard'
					InputProps={{
						...params.InputProps,
						endAdornment: (
							<>
								{loading ? <CircularProgress color='inherit' size={20} /> : null}
								{params.InputProps.endAdornment}
							</>
						),
					}}
				/>
			)}
			renderOption={(props, option) => {
				const matches = option.structured_formatting.main_text_matched_substrings || [];

				const parts = parse(
					option.structured_formatting.main_text,
					matches.map((match) => [match.offset, match.offset + match.length]),
				);

				return (
					<li {...props}>
						<Grid container alignItems='center'>
							{/* <Grid item sx={{ display: 'flex', width: 44 }}>
								<LocationOn sx={{ color: 'text.secondary' }} />
							</Grid> */}
							<Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
								{parts.map((part, index) => (
									<Box
										key={index}
										component='span'
										sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
									>
										{part.text}
									</Box>
								))}

								<Typography variant='body2' color='text.secondary'>
									{option.structured_formatting.secondary_text}
								</Typography>
							</Grid>
						</Grid>
					</li>
				);
			}}
		/>
	);
};

export default LocationField;
