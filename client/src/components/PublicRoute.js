import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../utils/AuthUtils';

const PublicRoute = ({ children }) => {
  const token = getToken();

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
