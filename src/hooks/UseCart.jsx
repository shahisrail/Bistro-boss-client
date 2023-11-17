/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseAxiosHoks from "./UseAxiosHoks";
import UseAuth from "./UseAuth";


const UseCart = () => {
  const axiosSecure = UseAxiosHoks()
  const {user} = UseAuth()
  const { refetch ,data: carts = [] } = useQuery({
    queryKey: ['carts',user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`)
      return res.data
    }
  })
  return [carts, refetch];
};

export default UseCart;
