/* eslint-disable no-unused-vars */
import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000",
});
const UseaxioxPulic = () => {
  return axiosPublic
};

export default UseaxioxPulic;