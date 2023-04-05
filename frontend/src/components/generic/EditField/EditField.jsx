import { Check, Close, MyLocation } from '@mui/icons-material';
import { Box, IconButton, Popover, Popper, Stack, TextField, Typography } from '@mui/material';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import './EditField.css';
import useBand from 'hooks/useBand.js';
import useCtrlEnterKeys from 'hooks/useCtrlEnterKeys.js';

const EditField = ({
	label,
	fieldLabel,
	initValue = '',
	name,
	variant = 'body1',
	onSubmit = async () => {},
	children,
	multiline,
	id,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState(null);
	const [anchor, setAnchor] = useState(null);
	const [value, setValue] = useState(initValue);

	const { isAdmin } = useBand();

	const handleCancel = () => {
		setValue(initValue);
		setIsEditing(false);
	};

	useEscKey(handleCancel);

	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, () => handleCancel());

	const handleClick = () => {
		isAdmin && setIsEditing(true);
	};

	const handleError = (event, exception) => {
		setAnchor(event.target);
		setError(exception);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const exception = await onSubmit({ [name]: value });
		exception ? handleError(e, exception) : handleCancel();
	};

	useEffect(() => {
		setError(null);
		setAnchor(null);
		initValue = value;
	}, [value]);

	useEffect(() => {
		setValue(initValue);
	}, [initValue]);

	let className = isAdmin ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	fieldLabel = fieldLabel || label;
	children = children || (
		<TextField
			id={id}
			multiline={multiline}
			fullWidth
			size='small'
			label={fieldLabel}
			autoFocus
			value={value}
			name={name}
			onChange={(e) => setValue(e.target.value)}
			variant='standard'
		/>
	);

	return (
		<div onClick={handleClick} ref={wrapperRef} className={className}>
			{isEditing ? (
				<form autoComplete='new-password' onSubmit={handleSubmit}>
					<Stack direction='row' justifyContent='space-between' alignItems='center'>
						{children}
						<IconButton
							disabled={initValue === value}
							color='success'
							type='submit'
							onClick={(e) => e.stopPropagation()}
						>
							<Check />
						</IconButton>
					</Stack>
				</form>
			) : (
				<div>
					<Typography variant='overline' color='primary'>
						{label}
					</Typography>
					<Typography variant={variant}>{initValue}</Typography>
				</div>
			)}
			<Popper anchorEl={anchor} open={Boolean(error)}>
				<Box sx={{ backgroundColor: 'background.paper' }} padding={1}>
					<Typography color='error'>{error && error[name]}</Typography>
				</Box>
			</Popper>
		</div>
	);
};

export default EditField;
