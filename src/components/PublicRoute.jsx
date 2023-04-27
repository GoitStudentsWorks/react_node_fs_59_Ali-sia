import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';

/**
 * - If the route is public gives acess to login or register page
 */

export const PublicRoute = () => {
  const token = useSelector(selectToken);
  return token ? <Navigate to="/" replace /> : <Outlet />;
};
