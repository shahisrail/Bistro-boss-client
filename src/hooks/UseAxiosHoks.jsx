/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosHoks = () => {
  const navigate = useNavigate();
  const { logout } = UseAuth();
  
  // request interceptor to add authorizatoin header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("accsess-token");
      // console.log("request stooped by interseptors", token);
      config.headers.authorizatoin = `Bearer ${token}`;

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log("status error in the interceptor ", status);
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosHoks;
