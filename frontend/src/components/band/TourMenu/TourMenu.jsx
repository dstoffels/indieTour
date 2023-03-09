import { Archive, Delete, DeleteForever, Edit, MoreVert } from '@mui/icons-material';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import axios from 'axios';
import useForm from 'hooks/useForm.js';
import MenuButton from 'menus/MenuButton/MenuButton.jsx';
import MenuButtonItem from 'menus/MenuButtonItem/MenuButtonItem.jsx';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFormData } from 'redux/modalSlice.js';
import { deleteTourThunk } from 'redux/tourSlice.js';
import { getConfigObj } from 'redux/userSlice.js';
import endpoints from 'utils/endpoints.js';

const TourMenu = ({ tour }) => {
	const dispatch = useDispatch();
	const { formKeys, openForm } = useForm();

	const handleEdit = () => {
		openForm(formKeys.editTour, tour);
	};
	const handleArchive = () => {
		console.log(tour.is_archived);
	};

	const handleDelete = async () => {
		dispatch(deleteTourThunk(tour.id));
	};

	return (
		<MenuButton buttonIcon={<MoreVert />}>
			<MenuButtonItem onClick={handleEdit} icon={<Edit />}>
				Edit
			</MenuButtonItem>
			<MenuButtonItem onClick={handleArchive} icon={<Archive />}>
				Archive
			</MenuButtonItem>
			<MenuButtonItem onClick={handleDelete} icon={<DeleteForever />}>
				Delete
			</MenuButtonItem>
		</MenuButton>
	);
};

export default TourMenu;
