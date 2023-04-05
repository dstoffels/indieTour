import { Check } from '@mui/icons-material';
import { IconButton, Stack, TextField, Typography } from '@mui/material';
import useEscKey from 'hooks/useEscKey.js';
import useOutsideClick from 'hooks/useOutsideClick.js';
import React, { useRef, useState } from 'react';
const EditFieldNew = ({
	label,
	fieldLabel,
	initValue = '',
	name,
	variant = 'body1',
	canEdit = false,
	children,
	multiline,
	fullwidth,
	id,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [anchor, setAnchor] = useState(null);
	const [value, setValue] = useState(initValue);

	let className = canEdit ? 'edit-field' : '';
	className += !isEditing ? ' inactive' : '';

	fieldLabel = fieldLabel || label;
	children = children || (
		<TextField
			label={fieldLabel}
			name={name}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			variant='standard'
			autoFocus
			id={id}
			multiline={multiline}
			fullWidth={fullwidth}
			InputProps={{
				endAdornment: (
					<IconButton
						disabled={initValue === value}
						color='success'
						type='submit'
						onClick={(e) => e.stopPropagation()}
					>
						<Check />
					</IconButton>
				),
			}}
		/>
	);

	useEscKey(handleCancel);

	const wrapperRef = useRef(null);
	useOutsideClick(wrapperRef, handleCancel);

	const handleClick = () => {
		canEdit && setIsEditing(true);
	};

	return (
		<div onClick={handleClick} ref={wrapperRef} className={className}>
			{isEditing ? (
				<form>{children}</form>
			) : (
				<Stack spacing={-1}>
					<Typography variant='overline' color='primary'>
						{label}
					</Typography>
					<Typography variant={variant}>{initValue}</Typography>
				</Stack>
			)}
		</div>
	);
};

export default EditFieldNew;
