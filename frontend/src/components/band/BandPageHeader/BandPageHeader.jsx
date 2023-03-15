import { Edit } from '@mui/icons-material';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import Page from 'pages/Page/Page.jsx';
import React, { useState } from 'react';
import BandSelect from '../BandSelect/BandSelect.jsx';

const BandPageHeader = ({ activeBand }) => {
	const [editing, setEditing] = useState(false);
	const [bandName, setBandName] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		console.log(bandName);
		setEditing(false);
		setBandName(activeBand.name);
	};

	return (
		<Page.Header>
			<Stack direction='row'>
				{editing ? (
					<form onSubmit={handleSubmit}>
						<TextField
							variant='standard'
							label='Editing Band Name'
							value={bandName}
							onChange={e => setBandName(e.target.value)}
						/>
					</form>
				) : /* <Typography variant='h6'>{activeBand.name}</Typography> */
				null}
			</Stack>
			<BandSelect />
		</Page.Header>
	);
};

export default BandPageHeader;
