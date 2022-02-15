import React, { useState } from 'react';

import FooterNav from './Components/FooterNav/FooterNav.jsx';
import Dates from './Components/Dates/Dates.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<Dates />
		</>
	);
};

export default App;
