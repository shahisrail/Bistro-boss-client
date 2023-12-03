/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const locatoin  = useLocation()
  const { user, loading } = useContext(AuthContext)
  console.log(loading);
  if (loading) {
    return <h3>dsgdysgddaahfy</h3>
  }
  if (user){
    return children
  }
  return <Navigate to='/login' state={{from:locatoin}} replace></Navigate>
};

export default PrivateRoutes;