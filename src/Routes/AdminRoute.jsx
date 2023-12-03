/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UseAdmin from "../hooks/UseAdmin";
import UseAuth from "../hooks/UseAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const {user, loading} = UseAuth();
  const [isAdmin, isAdminLoading] = UseAdmin();
  const locatoin = useLocation();
  console.log( "chek admin user ", isAdmin,user);

  if (loading || isAdminLoading) {
    return <h3>dsgdysgddaahfy</h3>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: locatoin }} replace></Navigate>;
};

export default AdminRoute;
