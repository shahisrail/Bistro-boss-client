/* eslint-disable no-unused-vars */
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import { FaPaypal, FaUser } from "react-icons/fa";

const AdminHome = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosHoks();
  const { data: stats } = useQuery({
    queryKey: ["admin-state"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-state");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl">
        <span> Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow w-full mt-5">
        <div className="stat flex items-center bg-[#C64FF5] text-white">
          <FaPaypal className="text-3xl"></FaPaypal>

          <div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">${stats.revenue}</div>
          </div>
        </div>

        <div className="stat flex items-center">
          <FaUser className="text-3xl"></FaUser>

          <div>
            <div className="stat-title">Customer</div>
            <div className="stat-value">${stats.users}</div>
          </div>
        </div>

        <div className="stat flex items-center">
          <FaPaypal className="text-3xl"></FaPaypal>

          <div>
            <div className="stat-title">Products</div>
            <div className="stat-value">${stats.manue}</div>
          </div>
        </div>
        <div className="stat flex items-center">
          <FaPaypal className="text-3xl"></FaPaypal>

          <div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">${stats.payment}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
