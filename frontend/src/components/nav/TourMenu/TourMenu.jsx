import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

const TourMenu = ({}) => {
	const tours = ['Tour 1', 'Tour 2', 'Tour 3'];
	const [tour, setTour] = useState(tours[0]);

	const handleChange = e => setTour(e.target.value);
	return (
		<FormControl sx={{ m: 1, minWidth: 200 }} size='small'>
			<InputLabel id='tour-select'>Tour</InputLabel>
			<Select labelId='tour-select' label='Tour' value={tour} onChange={handleChange}>
				{tours.map((tour, i) => (
					<MenuItem key={i + '-' + tour} value={tour}>
						{tour}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default TourMenu;
