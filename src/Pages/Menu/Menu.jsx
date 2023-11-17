/* eslint-disable no-unused-vars */
import React from 'react';
import Category from '../Home/Category/Category';
import { Helmet } from 'react-helmet';
import Cover from '../Shared/Cover/Cover';
import useMenu from '../../hooks/Usemenu';
import SectoinTitale from '../../Components/SectoinTitale/SectoinTitale';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
    const soup = menu.filter((item) => item.category === "soup");
    const offered = menu.filter((item) => item.category === "offered");
 
  return (
    <div>
      <Helmet>
        <title> Bistro boss | Our Menu</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/svkkbjQ/banner3.jpg"}
        titale={"OUR MENU"}
        text={"Would you like to try a dish?"}
      ></Cover>

      <SectoinTitale
        heading={"TODAY'S OFFER"}
        subHeading={"---Don't miss---"}
      ></SectoinTitale>
      <MenuCategory iteam={offered}></MenuCategory>
      {/* dessert  */}
      <MenuCategory
        iteam={dessert}
        titale={"dessert"}
        img={"https://i.ibb.co/4mnM5d4/dessert-bg.jpg"}
      ></MenuCategory>
      <MenuCategory
        iteam={pizza}
        titale={"pizza"}
        img={"https://i.ibb.co/YcHj8Wx/pizza-bg.jpg"}
      ></MenuCategory>
      <MenuCategory
        iteam={salad}
        titale={"salad"}
        img={"https://i.ibb.co/FnS4QNS/salad-bg.jpg"}
      ></MenuCategory>
      <MenuCategory
        iteam={soup}
        titale={"soup"}
        img={"https://i.ibb.co/Lk31DhG/soup-bg.jpg"}
      ></MenuCategory>
    </div>
  );
};

export default Menu;