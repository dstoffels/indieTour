import { Route, Routes } from 'react-router-dom';
import { HOME, LOGIN, SIGNUP, WAITING_ROOM, DASHBOARD } from './constants/routes.js';
import Home from './Components/Pages/Home/Home.jsx';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx';
import AuthProvider from './Components/Auth/Provider/AuthProvider.jsx';
import Navbar from './Components/Common/Navbar/Navbar/Navbar.jsx';
import VerifyEmail from './Components/Pages/VerifyEmail/VerifyEmail.jsx';
import BottomNav from './Components/Common/BottomNav/BottomNav.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import useUser from './hooks/useUser.js';

function App() {
	const user = useUser();
	return (
		<>
			<Navbar />
			<AuthProvider>
				<Routes>
					<Route exact path={HOME} element={<Home />}></Route>
					<Route path={WAITING_ROOM} element={<VerifyEmail />} />
					<Route path={DASHBOARD} element={<Dashboard />} />
				</Routes>
			</AuthProvider>
			{Boolean(user) && <BottomNav className='bottom-nav' />}
		</>
	);
}

export default App;
