/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../Pages/Shared/Fotter/Fotter';
import NavBar from '../Pages/Shared/NabBar/NavBar';

const Main = () => {
  return (
    <div>
      
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Main;