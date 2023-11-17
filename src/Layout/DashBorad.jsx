/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaEnvelope,
  FaUtensils,
  FaBook,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../hooks/UseCart";

const DashBorad = () => {
  const [carts] = UseCart();
  const isAdmin = true;
  return (
    <div className="flex ">
      <div className="w-64 min-h-screen bg-[#D29E55] text-black  font-bold">
        <ul className="menu   ">
          {isAdmin ? (
            <>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashborad/AdminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/AddIteams">
                  <FaUtensils></FaUtensils>
                  Add Iteams
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/manageItems">
                  <FaList></FaList> Manage Iteam 
                </NavLink>
              </li>

              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/bookings">
                  <FaBook></FaBook> Manage Bookings 
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/AllUsers">
                  <FaUser></FaUser> All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-center gap-2 ">
                <NavLink to="/dashborad/UserHome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/Reservatoin">
                  <FaCalendar></FaCalendar>Reservatoin
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({carts.length})
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/Review">
                  <FaAd></FaAd> Add a Review
                </NavLink>
              </li>
              <li className="flex items-center gap-2">
                <NavLink to="/dashborad/myBokking">
                  <FaList></FaList> My bokkings
                </NavLink>
              </li>
            </>
          )}

          {/* shared  */}
          <div className="divider"></div>

          <li className="flex items-center gap-2">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <NavLink to="/order/salad">
              <FaSearch></FaSearch> menu
            </NavLink>
          </li>
          <li className="flex items-center gap-2">
            <NavLink to="/order/contact">
              <FaEnvelope></FaEnvelope>Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBorad;
