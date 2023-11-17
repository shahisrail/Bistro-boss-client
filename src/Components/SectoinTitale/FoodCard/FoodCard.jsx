/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import UseCart from "../../../hooks/UseCart";


const FoodCard = ({ item }) => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const locatoin = useLocation();
  const axiosSecure = UseAxiosHoks()
  const { name, recipe, image, price, _id } = item;
  const [,refetch] = UseCart()
  const handelAddTocart = (food) => {
    if (user && user.email) {
      // addToCart(item);
      const cartItem = {
        mannId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "order succsess",
          });
          refetch()
        }
      });
      console.log(food);
    } else {
      Swal.fire({
        title: "You are not loggin ",
        text: "please login add to cart !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: locatoin } });
        }
      });
    }
  };
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-800 absolute right-0 top-1 text-white mr-6 mt-4 px-4">
        {price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-center">{recipe}</p>

        <div className="card-actions justify-center">
          <button
            onClick={() => handelAddTocart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 hover:bg-yellow-600  border-orange-600TAS"
          >
            Add to cart{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
