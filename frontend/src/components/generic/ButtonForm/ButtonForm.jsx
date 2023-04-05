import { Add, Check, Close } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useState } from 'react';
import PanelListItem from '../PanelListItem/PanelListItem.jsx';

const ButtonForm = ({
	formData,
	onSubmit,
	children,
	info,
	btnText,
	btnIcon = <Add />,
	autoClose = true,
	direction = 'row',
	onOpen = () => {},
	divider = true,
	disabled,
}) => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => setShowForm(!showForm);

	useEscKey(() => setShowForm(false));

	useOutsideClick(() => setShowForm(false));

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		autoClose && setShowForm(false);
	};

	useEffect(() => {
		onOpen();
	}, [showForm]);

	return (
		<PanelListItem divider={divider}>
			{showForm ? (
				<form onSubmit={handleSubmit} autoComplete='off'>
					<Stack direction={direction} spacing={1} justifyContent='space-between'>
						{children}
						<Stack direction='row' alignItems='center'>
							<IconButton color='info' variant='contained' type='submit' disabled={disabled}>
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
		</PanelListItem>
	);
};

export default ButtonForm;
