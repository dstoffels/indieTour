import { DeleteForever, Done, Save } from '@mui/icons-material';
import { Box, Button, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import PanelListItem from 'components/generic/PanelListItem/PanelListItem.jsx';
import SideStack from 'components/generic/SideStack/SideStack.jsx';
import useCustomForm from 'hooks/useCustomForm.js';
import React, { useState, useEffect } from 'react';
import MethodAutocomplete from '../MethodAutocomplete/MethodAutocomplete.jsx';
import useContacts from 'hooks/useContacts.js';
import DeletePopoverBasic from 'components/generic/danger-zone/DeletePopoverBasic/DeletePopoverBasic.jsx';

const MethodListItem = ({ method, onChange }) => {
	const [editing, setEditing] = useState(false);
	console.log(method);

	const { formData, handleChange } = useCustomForm({ method: method.method, value: method.value });

	const { updateContactMethod, deleteContactMethod } = useContacts();

	const handleEditing = () => {
		setEditing(true);
	};

	const handleClose = () => {
		setEditing(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		updateContactMethod(method.id, formData, onChange);
		handleClose();
		onChange();
	};

	return (
		<PanelListItem onClick={!editing ? handleEditing : null}>
			{editing ? (
				<Stack spacing={1}>
					<form onSubmit={handleSubmit}>
						<SideStack padding={0}>
							<MethodAutocomplete value={formData.method} onChange={handleChange} />
							<TextField
								fullWidth
								type={formData.method}
								label={formData.method}
								value={formData.value}
								onChange={handleChange}
								name='value'
							/>

							<IconButton color='success' type='submit'>
								<Done />
							</IconButton>

							<DeletePopoverBasic small onDelete={() => deleteContactMethod(method.id, onChange)}>
								Delete Contact Method?
							</DeletePopoverBasic>
						</SideStack>
					</form>
				</Stack>
			) : (
				<Box>
					<Typography color='primary' variant='overline'>
						{method.method}
					</Typography>
					<Typography>{method.value}</Typography>
				</Box>
			)}
		</PanelListItem>
	);
};

export default MethodListItem;
