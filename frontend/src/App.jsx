// General Imports
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage.jsx';
import TourPage from 'pages/TourPage/TourPage.jsx';
import BandPage from 'pages/BandPage/BandPage.jsx';

// Util Imports
import { Container } from '@mui/material';
import PrivateOutlet from 'utils/PrivateOutlet.jsx';
import { initialize } from 'utils/initialize.js';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'components/generic/modal/Modal/Modal.jsx';
import TodayPage from 'pages/TodayPage/TodayPage.jsx';
import DatesPage from 'pages/DatesPage/DatesPage.jsx';
import NewUserPage from 'pages/Page/NewUserPage/NewUserPage.jsx';

function App() {
	const dispatch = useDispatch();
	useEffect(() => initialize(dispatch), []);

	return (
		<div className='app'>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/user/:uid' element={<NewUserPage />} />
				<Route path='' element={<PrivateOutlet />}>
					<Route path='' element={<BandPage />} />
					<Route path='/profile' element={<ProfilePage />} />
					<Route path='/tour' element={<TourPage />} />
					<Route path='/dates' element={<DatesPage />} />
					<Route path='/today' element={<TodayPage />} />
				</Route>
			</Routes>
			<Modal />
		</div>
	);
}

export default App;
