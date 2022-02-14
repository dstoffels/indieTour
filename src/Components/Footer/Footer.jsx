import React from 'react';

import './Footer.css';

const Footer = props => {
	return <nav className='footer'>{props.children} </nav>;
};

export default Footer;
