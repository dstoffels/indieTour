import React, { useState } from 'react';

import Footer from '../Footer/Footer.jsx';
import NavItem from './NavItem/NavItem.jsx';

const NAV_ITEMS = [
	{ title: 'Today', icon: 'card-list' },
	{ title: 'Dates', icon: 'calendar' },
	{ title: 'Merch', icon: 'tags' },
	{ title: 'Expenses', icon: 'cash-coin' },
	// { title: '', icon: '' },
];
const FooterNav = props => {
	const [activeItem, setActiveItem] = useState('Today');

	function displayNavItems() {
		return NAV_ITEMS.map(({ title, icon }, i) => (
			<NavItem
				key={i}
				title={title}
				icon={icon}
				isActive={title == activeItem}
				onClick={setActiveItem}
			/>
		));
	}
	return (
		<Footer>
			{displayNavItems(activeItem)}
			<NavItem icon='list' />
		</Footer>
	);
};

export default FooterNav;
