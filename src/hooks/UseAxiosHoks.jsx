/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const UseAxiosHoks = () => {
   return axiosSecure
};

export default UseAxiosHoks;