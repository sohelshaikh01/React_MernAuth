import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// If user properly Login then give access to Home page.

const PrivateRoute = () => {

    const { userInfo } = useSelector((state) => state.auth);

    return userInfo ? <Outlet /> : <Navigate to='/login' replace />

}

export default PrivateRoute;
