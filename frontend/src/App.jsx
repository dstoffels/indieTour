// General Imports
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

// Component Imports
import Footer from './components/Footer/Footer';

// Util Imports
import PrivateRoute from './utils/PrivateRoute';
import Map from './components/Map/Map.jsx';
import Navbar from 'components/nav/NavBar/NavBar.jsx';
import ProfilePage from 'pages/ProfilePage/ProfilePage.jsx';
import { Container } from '@mui/material';

function App() {
	return (
		<div>
			<Navbar />
			{/* <Map /> */}
			<Container>
				<Routes>
					<Route
						path='/'
						element={
							<PrivateRoute>
								<HomePage />
							</PrivateRoute>
						}
					/>
					<Route
						path='/profile'
						element={
							<PrivateRoute>
								<ProfilePage />
							</PrivateRoute>
						}
					/>
					<Route path='/register' element={<RegisterPage />} />
				</Routes>
			</Container>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
