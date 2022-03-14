import { Route, Routes } from 'react-router-dom';
import { HOME, WAITING_ROOM, CONSOLE, TODAY, BOOKING, DATES } from './constants/routes.js';
import Home from './Components/Pages/Home/Home.jsx';
import ConsolePage from './Components/Pages/Console/ConsolePage/ConsolePage.jsx';
import AuthProvider from './Components/Auth/Provider/AuthProvider.jsx';
import Navbar from './Components/Common/Navbar/Navbar/Navbar.jsx';
import VerifyEmail from './Components/Pages/VerifyEmail/VerifyEmail.jsx';
import BottomNav from './Components/Common/BottomNav/BottomNav.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useUser from './hooks/useUser.js';
import Booking from './Components/Pages/Booking/Booking.jsx';
import Today from './Components/Pages/Today/Today.jsx';
import Dates from './Components/Pages/Dates/Dates.jsx';

function App() {
	const { user } = useUser();

	return (
		<>
			<Navbar />
			<AuthProvider>
				<Routes>
					<Route exact path={HOME} element={<Home />}></Route>
					<Route path={WAITING_ROOM} element={<VerifyEmail />} />
					<Route path={TODAY} element={<Today />} />
					<Route path={DATES} element={<Dates />} />
					<Route path={BOOKING} element={<Booking />} />
					<Route path={CONSOLE} element={<ConsolePage />} />
				</Routes>
			</AuthProvider>
			{Boolean(user) && <BottomNav />}
		</>
	);
}

export default App;
