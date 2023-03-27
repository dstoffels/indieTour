import { Check, Close } from '@mui/icons-material';
import { Box, IconButton, Popover, Popper, TextField, Typography } from '@mui/material';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useEffect, useRef, useState } from 'react';
import './EditField.css';

const EditField = ({
	label,
	initValue = '',
	name,
	variant = 'body1',
	canEdit = false,
	onSubmit = async () => {},
	children,
	multiline,
	fullWidth,
	id,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [error, setError] = useState(null);
	const [anchor, setAnchor] = useState(null);
	const [value, setValue] = useState(initValue);

	const handleCancel = e => {
		setValue(initValue);
		setIsEditing(false);
	};

	useEscKey(handleCancel);

	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, handleCancel);

	const handleClick = () => {
		canEdit && setIsEditing(true);
	};

	const handleError = (event, exception) => {
		setAnchor(event.target);
		setError(exception);
	};

	const handleSubmit = async e => {
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

	let className = canEdit ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	return (
		<div onClick={handleClick} ref={wrapperRef} className={className}>
			{isEditing ? (
				<form autoComplete='new-password' onSubmit={handleSubmit}>
					<TextField
						id={id}
						multiline={multiline}
						fullWidth={fullWidth}
						size='small'
						label={label}
						autoFocus
						value={value}
						name={name}
						onChange={e => setValue(e.target.value)}
						variant='standard'
						InputProps={{
							endAdornment: (
								<IconButton
									disabled={initValue === value}
									color='success'
									type='submit'
									onClick={e => e.stopPropagation()}>
									<Check />
								</IconButton>
							),
						}}
					/>
				</form>
			) : (
				<div>
					{children}
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
