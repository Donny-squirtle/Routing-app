import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Navigate } from 'react-router-dom';

function RequireAuth({ children, auth }) {
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}
RequireAuth.propTypes = {
  children: PropTypes.shape({}).isRequired,
  auth: PropTypes.bool.isRequired,
};

export default RequireAuth;
