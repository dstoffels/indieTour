import { Add, Check, Close } from '@mui/icons-material';
import {
	Box,
	Button,
	IconButton,
	ListItemIcon,
	ListItemText,
	MenuItem,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import PanelListItem from '../PanelListItem/PanelListItem.jsx';

const ButtonForm = ({
	formData,
	onSubmit,
	children,
	info,
	btnText,
	autoClose = true,
	direction = 'row',
	onOpen = () => {},
	onClose = () => {},
	disabled,
	onClick = () => {},
}) => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => {
		onClick();
		setShowForm(!showForm);
	};

	useEscKey(() => setShowForm(false));

	const ref = useRef(null);
	useOutsideClick(ref, () => setShowForm(false));

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		autoClose && setShowForm(false);
	};

	useEffect(() => {
		showForm && onOpen();
		!showForm && onClose();
	}, [showForm]);

	return showForm ? (
		<Box padding={2}>
			<form onSubmit={handleSubmit} autoComplete='off' ref={ref}>
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
		</Box>
	) : (
		<MenuItem onClick={handleShowForm}>
			<Stack direction='row' padding={1}>
				<ListItemIcon>
					<Add color='success' />
				</ListItemIcon>
				<Typography color=''>{btnText}</Typography>
			</Stack>
		</MenuItem>
	);
};

export default ButtonForm;
