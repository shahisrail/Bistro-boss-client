/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Cover = ({img ,titale,text} ) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content bg-opacity-40 bg-slate-700 w-4/5 h-[80%]">
        <div className="  ">
          <h1 className="mb-5 text-5xl font-bold uppercase">{titale}</h1>
          <p className="mb-5">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
