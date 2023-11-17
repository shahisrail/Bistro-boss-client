/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link,  } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../hooks/UseCart";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const [carts] = UseCart()
  const handelLogut = () => {
    logout()
      .then((res) => {})
      .catch((error) => console.error(error));
  };
  const navOptoins = (
    <div className="flex gap-5">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/menu">
        <li>Our Menu</li>
      </Link>
      <Link to="/order/salad">
        <li>order</li>
      </Link>
      <Link to="/secret">
        <li>secret</li>
      </Link>

      <Link to="/signUp">
        <li> Registare</li>
      </Link>
      <Link to="/dashborad/cart">
        <li>
          <button className="">
            <FaShoppingCart />
            <div className="badge badge-secondary">+{carts.length}</div>
          </button>
        </li>
      </Link>
      {user ? (
        <>
          <p>{user?.displayName}</p>
          <button onClick={handelLogut}>logout</button>
        </>
      ) : (
        <>
          <Link to="/login">
            <li> Login </li>
          </Link>
        </>
      )}
    </div>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-balck text-white max-w-7xl ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navOptoins}
          </ul>
        </div>
        <h2 className=" normal-case text-xl">
          BISTRO BOSS <br />
          Restaurant
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptoins}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn text-red-500">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
