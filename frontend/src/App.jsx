// General Imports
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

// Util Imports
import Navbar from 'components/nav/NavBar/NavBar.jsx';
import ProfilePage from 'pages/ProfilePage/ProfilePage.jsx';
import { Container } from '@mui/material';
import DashboardPage from 'pages/DashboardPage/DashboardPage.jsx';
import PrivateOutlet from 'utils/PrivateOutlet.jsx';
import { initialize } from 'utils/initialize.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/generic/modal/Modal/Modal.jsx';
import TourPage from 'pages/TourPage/TourPage.jsx';

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
						<Route path='/tour' element={<TourPage />} />
					</Route>
				</Routes>
			</Container>
			<Modal />
		</div>
	);
}

export default App;
