import { Button, InputLabel, Menu, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import { FormControl } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

const TourSelector = props => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const [tour, setTour] = useState('tour1');

	const handleChange = e => setTour(e.target.value);
	const handleClose = e => setAnchorEl(null);

	return (
		<div>
			<FormControl>
				<Select
					value={tour}
					onChange={handleChange}
					variant='standard'
					sx={{ color: 'white', fontSize: '.9rem', maxWidth: 180 }}
					MenuProps={{ PaperProps: { sx: { bgcolor: 'rgb(18,18,18)' } } }}>
					<MenuItem value='tour1'>bigboi tour 2022sbigboi tour 2022s</MenuItem>
					<MenuItem value='tour2'>tour2</MenuItem>
					<MenuItem value='tour3'>tour3</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

export default TourSelector;
