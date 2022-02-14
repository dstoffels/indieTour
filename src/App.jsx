import React, { useState } from 'react';

import Today from './Components/Today/Today.jsx';
import Header from './Components/Header/Header.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Footer from './Components/Footer/Footer.jsx';
import Navbar from './Components/NavBar/Navbar.jsx';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<div className={`container${darkMode ? ' dark' : ''}`}>
				<Today />
			</div>
			<Navbar />
		</>
	);
};

export default App;
