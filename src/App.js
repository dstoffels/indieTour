import { Route, Routes } from 'react-router-dom';
import { HOME, SIGN_IN, SIGNUP, WAITING_ROOM, DASHBOARD } from './constants/routes.js';
import SignUp from './Components/Auth/SignUp/SignUp.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Authenticate from './Components/Auth/Authentication/Authentication.jsx';
import SignIn from './Components/Auth/SignIn/SignIn.jsx';
import VerifyEmail from './Components/Auth/VerifyEmail/VerifyEmail.jsx';
import Dashboard from './Components/Pages/Dashboard/Dashboard.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route exact path={HOME} element={<Home />}></Route>
				<Route path={SIGN_IN} element={<SignIn />} />
				<Route path={SIGNUP} element={<SignUp />} />
				<Route path={WAITING_ROOM} element={<VerifyEmail />} />
				<Route path={DASHBOARD} element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
