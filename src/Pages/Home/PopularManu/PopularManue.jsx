/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import MeanuIteam from "../../Shared/MeanuIteam/MeanuIteam";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";
import useMenu from "../../../hooks/Usemenu";

const PopularManue = () => {
  const [menu] = useMenu()
  const popular = menu.filter((item) => item.category === "popular");
  // const [menu, setMenu] = useState([]); 
  // useEffect(() => {
  //   fetch("/Menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter((item) => item.category === "popular");
  //       setMenu(popularItems);
  //     });
  // }, []); 
  return (
    <section className="mb-12">
      <SectoinTitale
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      ></SectoinTitale>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item) => (
          <MeanuIteam key={item._id} item={item}></MeanuIteam>
        ))}
      </div>
    </section>
  );
};

export default PopularManue;
