import { Card, CardActionArea, CardActions, CardContent, Divider } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';
import './Panel.css';

const Panel = ({ title = '', actions, children }) => {
	const header = Boolean(title) && <h6 className='panel-header'>{title}</h6>;

	return (
		<Col sm={12} md={6} className='my-2'>
			<Card elevation={6}>
				{header}
				<CardContent>{children}</CardContent>
				{Boolean(actions) && <CardActions className='justify-content-end'>{actions}</CardActions>}
			</Card>
		</Col>
	);
};

Panel.Section = ({ title, topActions, bottomActions, children }) => {
	return (
		<Card elevation={0} className='mb-2'>
			<h5 className='panel-header'>{title}</h5>
			{Boolean(topActions) && (
				<CardActions className='justify-content-end'>{topActions}</CardActions>
			)}
			<CardContent>{children}</CardContent>
			{Boolean(bottomActions) && (
				<CardActions className='justify-content-end'>{bottomActions}</CardActions>
			)}
		</Card>
	);
};
Panel.Divider = props => <Divider className='my-4' />;

export default Panel;
