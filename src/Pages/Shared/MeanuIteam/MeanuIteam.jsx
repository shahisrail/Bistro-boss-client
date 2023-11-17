/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MeanuIteam = ({ item }) => {
  const { name, recipe, image, category, price } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className=" w-[104px]"
        src={image}
        alt=""
      />
      <div className="flex">
        <h2 className="uppercase"> {name}------------------ </h2>
        <p>{recipe}</p>
        <p className="text-[#BB8506]">{price}</p>
      </div>
    </div>
  ); 


};

export default MeanuIteam;