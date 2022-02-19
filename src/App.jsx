import React, { useState } from 'react';

import Dates from './Components/Dates/Dates.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

import MainNav from './Components/MainNav/MainNav.jsx';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<Dates />
			<MainNav />
		</>
	);
};

export default App;
