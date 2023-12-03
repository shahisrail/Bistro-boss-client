import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import DashBorad from "../Layout/DashBorad";

import Cart from "../Pages/Dashborad/Cart/Cart";
import AllUsers from "../Pages/Dashborad/AllUsers";
import AddIteams from "../Pages/Dashborad/AddIteams/AddIteams";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashborad/MangaeItem/ManageItem";
import UpdateItem from "../Pages/Dashborad/UpdateIteam/UpdateItem";
import Payemnt from "../Pages/Dashborad/Payment/Payemnt";
import PaymentHistory from "../Pages/Dashborad/PaymentHistory/PaymentHistory";
import AdminHome from "../Pages/Dashborad/AdminHome/AdminHome";
import UserHome from "../Pages/Dashborad/UserHome/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },

  {
    path: "/dashborad",
    element: (
      <PrivateRoutes>
        <DashBorad></DashBorad>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payementHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "payment",
        element: <Payemnt></Payemnt>,
      },
      {
        path: "UserHome",
        element:<UserHome></UserHome>
      },
      // admin routes

      {
        path: "AddIteams",
        element: (
          <AdminRoute>
            <AddIteams></AddIteams>
          </AdminRoute>
        ),
      },
      {
        path: "AdminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "AllUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
