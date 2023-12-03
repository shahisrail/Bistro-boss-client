/* eslint-disable no-unused-vars */
import React from "react";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";
import useMenu from "../../../hooks/Usemenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = UseAxiosHoks();
  const handelDelteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };
  const handelUpdateItem = (item) => {};

  return (
    <div>
      <SectoinTitale
        heading="Manage All Items"
        subHeading="Hurry up"
      ></SectoinTitale>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price </th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1} </th>
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
                  <td> {item.name} </td>
                  <td>${item.price}</td>
                  <td>
                    <Link to={`/dashborad/updateItem/${item._id}`}>
                      <button
                        onClick={() => handelUpdateItem(item)}
                        className="btn btn-ghost btn-lg text-red-600"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handelDelteItem(item)}
                      className="btn btn-ghost btn-lg text-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
