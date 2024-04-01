import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

ProtectedRoute.propTypes = {
    user: PropTypes.any, 
    redirectTo: PropTypes.string.isRequired,
    children: PropTypes.node 
  };

const ProtectedRoute = ({ user, redirectTo, children }) => {
  if (user == null) {
    return <Navigate replace to={redirectTo} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;