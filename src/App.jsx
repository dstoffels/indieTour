import React, { useState } from 'react';

import Today from './Components/Today/Today.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Navbar from './Components/NavBar/Navbar.jsx';
import DatesList from './Components/DatesList/DatesList.jsx';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<DatesList />
			{/* <div className={`container${darkMode ? ' dark' : ''}`}>
				<Today />
			</div> */}
			<Navbar />
		</>
	);
};

export default App;
