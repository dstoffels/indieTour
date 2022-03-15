import { Divider } from '@mui/material';
import React from 'react';
import { Col } from 'react-bootstrap';

const Panel = ({ title = '', children }) => {
	const header = Boolean(title) && <h3 className='panel-header'>{title}</h3>;

	return (
		<Col sm={12} md={6} className='text-center mt-2'>
			{header}
			{children}
		</Col>
	);
};

Panel.Divider = props => <Divider className='my-4' />;

Panel.Section = ({ children }) => {
	return <div className='mb-4'>{children}</div>;
};

export default Panel;
