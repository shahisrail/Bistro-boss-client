/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const SectoinTitale = ({heading,subHeading}) => {
  return (
    <div className='md:w-3/12 mx-auto py-5'>
      <h3 className="text-[#D99904] text-center"> {subHeading} </h3>
    
      <p className=" text-3xl py-5 border-y-4 mt-5 text-center "> {heading}</p>
    </div>
  );
};

export default SectoinTitale;