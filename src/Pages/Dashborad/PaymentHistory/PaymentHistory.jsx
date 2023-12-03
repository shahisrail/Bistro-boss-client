/* eslint-disable no-unused-vars */
import React from "react";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosHoks from "../../../hooks/UseAxiosHoks";
import { useQuery } from "@tanstack/react-query";
import SectoinTitale from "../../../Components/SectoinTitale/SectoinTitale";

const PaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosHoks();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectoinTitale
        subHeading="------At a glenncy------"
        heading="Payment History"
      ></SectoinTitale>
      <h2> Total payment:{payments.length} </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Category</th>
              <th>Total Price</th>
              <th>TranjectoinId</th>
              <th>Payment date</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <th> {user.email} </th>
                <td>{payment.cate}</td>
                <td>{payment.price}</td>
                <td>{payment.tranjectoin}</td>
                <td>{payment.date}</td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
