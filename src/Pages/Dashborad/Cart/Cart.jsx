/* eslint-disable no-unused-vars */
import React from "react";
import UseCart from "../../../hooks/UseCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import { Link } from "react-router-dom";

const Cart = () => {
  const [carts, refetch] = UseCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  const axiosSecure = UseAxiosHoks();
  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-5xl">Items:{carts.length}</h2>
        <h2 className="text-5xl">TOtal Price:{totalPrice}</h2>
        {carts.length ? (
          <Link to="/dashborad/payment">
            <button className="text-5xl btn">Pay:</button>
          </Link>
        ) : (
          <button disabled className="text-5xl btn">Pay:</button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Actoin</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    {" "}
                    <FaTrashAlt></FaTrashAlt>{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
