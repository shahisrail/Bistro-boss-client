/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/Usemenu";
import FoodCard from "../../../Components/SectoinTitale/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabindex] = useState(initialIndex);
  const [menu] = useMenu();

  console.log(category);
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title> Bistro boss | Order Food</title>
      </Helmet>
      <Cover
        img={"https://i.ibb.co/SxtYVJn/banner2.jpg"}
        titale={"order food"}
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab iteams={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteams={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteams={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteams={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab iteams={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
