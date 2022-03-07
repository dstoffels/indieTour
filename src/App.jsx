import { Route, Routes } from 'react-router-dom';
import { HOME, WAITING_ROOM, CONSOLE, TODAY, BOOKING, DATES } from './constants/routes.js';
import Home from './Components/Pages/Home/Home.jsx';
import Console from './Components/Pages/Console/Console.jsx';
import AuthProvider from './Components/Auth/Provider/AuthProvider.jsx';
import Navbar from './Components/Common/Navbar/Navbar/Navbar.jsx';
import VerifyEmail from './Components/Pages/VerifyEmail/VerifyEmail.jsx';
import BottomNav from './Components/Common/BottomNav/BottomNav.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import useUser from './hooks/useUser.js';
import Booking from './Components/Pages/Booking/Booking.jsx';
import Today from './Components/Pages/Today/Today.jsx';
import Dates from './Components/Pages/Dates/Dates.jsx';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/system';
import { useMemo } from 'react';

function App() {
	const user = useUser();

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: prefersDarkMode ? 'dark' : 'light',
				},
			}),
		[prefersDarkMode],
	);

	return (
		<>
			<CssBaseline enableColorScheme={true} />
			<ThemeProvider theme={theme}>
				<Navbar />
				<AuthProvider>
					<Routes>
						<Route exact path={HOME} element={<Home />}></Route>
						<Route path={WAITING_ROOM} element={<VerifyEmail />} />
						<Route path={TODAY} element={<Today />} />
						<Route path={DATES} element={<Dates />} />
						<Route path={BOOKING} element={<Booking />} />
						<Route path={CONSOLE} element={<Console />} />
					</Routes>
				</AuthProvider>
				{Boolean(user) && <BottomNav className='bottom-nav' />}
			</ThemeProvider>
		</>
	);
}

export default App;
