// General Imports
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

// Component Imports
import Footer from './components/Footer/Footer';

// Util Imports
import Map from './components/Map/Map.jsx';
import Navbar from 'components/nav/NavBar/NavBar.jsx';
import ProfilePage from 'pages/ProfilePage/ProfilePage.jsx';
import { Container, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import DashboardPage from 'pages/DashboardPage/DashboardPage.jsx';
import PrivateOutlet from 'utils/PrivateOutlet.jsx';
import useInit, { initialize } from 'utils/initialize.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	useEffect(() => initialize(dispatch), []);

	return (
		<div>
			<Navbar />
			<Container className='app'>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='' element={<PrivateOutlet />}>
						<Route path='' element={<DashboardPage />} />
						<Route path='/profile' element={<ProfilePage />} />
					</Route>
				</Routes>
			</Container>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
