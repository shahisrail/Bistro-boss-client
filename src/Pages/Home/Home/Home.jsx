/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularManue from '../PopularManu/PopularManue';
import Featured from '../Featured/Featured';
import Testomial from '../Testomonial/Testomial';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Bistro boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularManue></PopularManue>
      <Featured></Featured>
      <Testomial></Testomial>
    </div>
  );
};

export default Home;