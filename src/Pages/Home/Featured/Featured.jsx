/* eslint-disable no-unused-vars */
import React from 'react';
import SectoinTitale from '../../../Components/SectoinTitale/SectoinTitale';
import featured from "../../../assets/home/featured.jpg";
import './featureItem.css'
const Featured = () => {
  return (
    <div className="featureItem bg-fixed bg-opacity-90 text-white bg-blend-overlay ">
      <SectoinTitale
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      ></SectoinTitale>

      <div className="flex items-center gap-8 bg-opacity-50 bg-slate-500 justify-center py-20 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="text-white">
          <p>March 20, 2023</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;