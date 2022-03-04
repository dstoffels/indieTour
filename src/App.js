import { Route, Routes } from 'react-router-dom';
import { HOME, LOGIN, SIGNUP, WAITING_ROOM, DASHBOARD } from './constants/routes.js';
import SignUp from './Components/Auth/SignUp/SignUp.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import Login from './Components/Auth/Login/Login.jsx';
import VerifyEmail from './Components/Auth/VerifyEmail/VerifyEmail.jsx';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx';
import Navbar from './Components/Common/Navbar/Navbar.jsx';
import AuthProvider from './Components/Auth/Provider/AuthProvider.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<>
			<Navbar />
			<AuthProvider>
				<Routes>
					<Route exact path={HOME} element={<Home />}></Route>
					<Route path={LOGIN} element={<Login />} />
					<Route path={SIGNUP} element={<SignUp />} />
					<Route path={WAITING_ROOM} element={<VerifyEmail />} />
					<Route path={DASHBOARD} element={<Dashboard />} />
				</Routes>
			</AuthProvider>
		</>
	);
}

export default App;
