import Login from './Components/Auth/LoginPage/Login/Login.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HOME, LOGIN, SIGNUP } from './constants/routes.js';

function App() {
	return (
		<Routes>
			<Route path={LOGIN} element={<Login />} />
			<Route path={SIGNUP} />
			<Route exact path={HOME}>
				{/* route: dashboard
				route: dates
				route: calendar
				route: ? */}
			</Route>
		</Routes>
	);
}

export default App;
