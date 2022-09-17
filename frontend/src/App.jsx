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
import { Container } from '@mui/material';
import DashboardPage from 'pages/DashboardPage/DashboardPage.jsx';
import PrivateOutlet from 'utils/PrivateOutlet.jsx';

function App() {
	return (
		<div>
			<Navbar />
			<Container>
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
