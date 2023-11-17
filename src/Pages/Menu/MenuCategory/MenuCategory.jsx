/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import MeanuIteam from '../../Shared/MeanuIteam/MeanuIteam';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ iteam, titale, img, text }) => {
  return (
    <div className="pt-16">
      {titale && <Cover img={img} titale={titale} text={text}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {iteam.map((item) => (
          <MeanuIteam key={item._id} item={item}></MeanuIteam>
        ))}
      </div>
      <Link to={`/order/${titale}`}>
        <button className="btn btn-outline border-0 border-b-4">
        order now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;