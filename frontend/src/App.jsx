// General Imports
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from 'pages/ProfilePage/ProfilePage.jsx';
import TourPage from 'pages/TourPage/TourPage.jsx';
import BandPage from 'pages/BandPage/BandPage.jsx';

// Util Imports
import PrivateOutlet from 'utils/PrivateOutlet.jsx';
import TodayPage from 'pages/TodayPage/TodayPage.jsx';
import DatesPage from 'pages/DatesPage/DatesPage.jsx';
import NewUserPage from 'pages/NewUserPage/NewUserPage.jsx';

function App() {
	return (
		<>
			<div className='app'>
				<Routes>
					<Route path='/home' element={<HomePage />} />
					<Route path='/user/:uid' element={<NewUserPage />} />
					<Route path='' element={<PrivateOutlet />}>
						<Route path='' element={<BandPage />} />
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/tour' element={<TourPage />} />
						<Route path='/dates' element={<DatesPage />} />
						<Route path='/dates/:date_id' element={<DatesPage />} />
						<Route path='/today' element={<TodayPage />} />
					</Route>
				</Routes>
				{/* <Modal /> */}
			</div>
		</>
	);
}

export default App;
