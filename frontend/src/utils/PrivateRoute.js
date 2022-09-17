import { Navigate, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ path, element }) => {
	const [user] = useAuth();
	return user ? <Route path={path} element={element} /> : <Navigate to='/' />;
};

export default PrivateRoute;
