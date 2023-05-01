import { Add, Check, Close } from '@mui/icons-material';
import {
	Box,
	Collapse,
	IconButton,
	ListItemIcon,
	MenuItem,
	Paper,
	Tooltip,
	Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import SideStack from '../SideStack/SideStack.jsx';
import { theme } from 'theme/theme.js';

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
	spacing = 2,
}) => {
	const [showForm, setShowForm] = useState(false);

	const handleShowForm = () => {
		onClick();
		setShowForm(!showForm);
	};

	useEscKey(() => setShowForm(false));

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData);
		autoClose && setShowForm(false);
	};

	useEffect(() => {
		showForm && onOpen();
		!showForm && onClose();
	}, [showForm]);

	const timeout = 200;

	return (
		<>
			<Collapse in={showForm} timeout={timeout}>
				<Box padding={1}>
					<Paper elevation={6}>
						<Box padding={1}>
							<form onSubmit={handleSubmit} autoComplete='off'>
								<Stack spacing={1}>
									<Stack direction={direction} spacing={spacing} justifyContent='space-between'>
										{children}
									</Stack>
									<SideStack justifyContent='end' spacing={1}>
										<Tooltip title='Submit'>
											<IconButton size='large' color='info' type='submit' disabled={disabled}>
												<Check />
											</IconButton>
										</Tooltip>
										<Tooltip title='Cancel'>
											<IconButton size='large' onClick={handleShowForm} color='error'>
												<Close />
											</IconButton>
										</Tooltip>
									</SideStack>
									{info && <Typography variant='caption'>{info}</Typography>}
								</Stack>
							</form>
						</Box>
					</Paper>
				</Box>
			</Collapse>
			<Collapse in={!showForm} timeout={timeout}>
				<MenuItem onClick={handleShowForm}>
					<Stack direction='row' padding={1}>
						<ListItemIcon>
							<Add color='info' />
						</ListItemIcon>
						<Typography fontWeight={600} sx={{ color: theme.palette.info.main }}>
							{btnText}
						</Typography>
					</Stack>
				</MenuItem>
			</Collapse>
		</>
	);
};

export default ButtonForm;
