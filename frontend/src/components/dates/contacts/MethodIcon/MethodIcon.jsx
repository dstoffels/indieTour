import {
	Email,
	Facebook,
	Instagram,
	PermContactCalendar,
	Phone,
	Twitter,
	WhatsApp,
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';

const MethodIcon = ({ method }) => {
	const handleClick = (e) => {
		e.stopPropagation();
	};
	return (
		<IconButton href={hrefFactory(method)} color='primary' size='large' onClick={handleClick}>
			{iconFactory(method.method)}
		</IconButton>
	);
};

export default MethodIcon;

function hrefFactory(method) {
	switch (method.method) {
		case 'Phone':
			return `tel:${method.value}`;
		case 'Email':
			return `mailto:${method.value}`;
		case 'WhatsApp':
			return `whatsapp://send?${method.value}`;
		default:
			return method.value;
	}
}

function iconFactory(method) {
	switch (method) {
		case 'Phone':
			return <Phone />;
		case 'Email':
			return <Email />;
		case 'Facebook':
			return <Facebook />;
		case 'Instagram':
			return <Instagram />;
		case 'WhatsApp':
			return <WhatsApp />;
		case 'Twitter':
			return <Twitter />;
		default:
			return <PermContactCalendar />;
	}
}
