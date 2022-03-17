import { Card, CardContent, Divider } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Panel.css';

const Panel = ({ title = '', children }) => {
	const header = Boolean(title) && <h3 className='panel-header'>{title}</h3>;

	return (
		<Col sm={12} md={6} className='my-2'>
			<Card elevation={6}>
				{header}
				<CardContent>{children}</CardContent>
			</Card>
		</Col>
	);
};

Panel.Section = ({ title, children }) => {
	return (
		<Card elevation={0}>
			<CardContent>{children}</CardContent>
		</Card>
	);
};
Panel.Divider = props => <Divider className='my-4' />;

export default Panel;
