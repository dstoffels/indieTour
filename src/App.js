import { Route, Routes } from 'react-router-dom';
import { HOME, SIGN_IN, SIGNUP, WAITING_ROOM } from './constants/routes.js';
import SignUp from './Components/Auth/SignUp/SignUp.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Authenticate from './Components/Auth/Authentication/Authentication.jsx';
import SignIn from './Components/Auth/SignIn/SignIn.jsx';
import VerifyEmail from './Components/Auth/VerifyEmail/VerifyEmail.jsx';

function App() {
	return (
		<Routes>
			<Route path={SIGN_IN} element={<SignIn />} />
			<Route path={SIGNUP} element={<SignUp />} />
			<Route
				path={WAITING_ROOM}
				element={
					<Authenticate>
						<VerifyEmail />
					</Authenticate>
				}
			/>
			<Route
				exact
				path={HOME}
				element={
					<Authenticate>
						<Home />
					</Authenticate>
				}>
				{/* route: dashboard
				route: dates
				route: calendar
			route: ? */}
			</Route>
		</Routes>
	);
}

export default App;
