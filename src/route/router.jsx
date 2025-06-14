import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../Header/Login";
import Register from "../Header/Register";
import DashBoardLayout from "../Layout/DashBoardLayout"
import AddMarathon from "../DashBoard/Add Marathon/AddMarathon";
import MyMarathon from "../DashBoard/My Marathon/MyMarathon";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      },
      ],
  },
  {
    path:'/dashBoard',
    Component:DashBoardLayout,
    children:[
      {
        path:'add-marathon',
        Component:AddMarathon
      },
      {
        path:'my-marathons',
        Component:MyMarathon
      }
    ]
  }
]);



