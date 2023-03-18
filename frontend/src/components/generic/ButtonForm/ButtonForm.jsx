import { Add, Check, Close } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import useEscKey from 'hooks/useEscKey.js';
import React, { useState } from 'react';
import ListPanelItem from '../ListPanelItem/ListPanelItem.jsx';

const ButtonForm = ({ formData, onSubmit, children, info, btnText, btnIcon = <Add /> }) => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => setShowForm(!showForm);

	useEscKey(() => setShowForm(false));

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit(formData);
		setShowForm(false);
	};

	return (
		<ListPanelItem>
			{showForm ? (
				<form onSubmit={handleSubmit} autoComplete='off'>
					<Stack direction='row' spacing={1} justifyContent='space-between'>
						{children}
						<Stack direction='row' alignItems='center'>
							<IconButton color='info' variant='contained' type='submit'>
								<Check />
							</IconButton>
							<IconButton onClick={handleShowForm} color='error'>
								<Close />
							</IconButton>
						</Stack>
					</Stack>
					<Typography variant='caption'>{info}</Typography>
				</form>
			) : (
				<Button size='large' color='info' startIcon={btnIcon} onClick={handleShowForm}>
					{btnText}
				</Button>
			)}
		</ListPanelItem>
	);
};

export default ButtonForm;
