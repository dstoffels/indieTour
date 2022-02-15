import React from 'react';

import './NavItem.css';

const NavItem = ({ title, icon, onClick = () => {}, isActive }) => {
	return (
		<div onClick={() => onClick(title)} className={`nav-item${isActive ? ' active' : ''}`}>
			<h3>
				<i className={`bi bi-${icon}`}></i>
			</h3>
			{title ? <div>{title}</div> : <></>}
		</div>
	);
};

export default NavItem;
