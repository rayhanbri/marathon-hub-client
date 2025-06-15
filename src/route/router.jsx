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
import PrivateRoute from "../Components/Auth/PrivateRoute";
import Details from "../Home/Details";
import MarathonReg from "../Home/MarathonReg";
import { details } from "../API/Details";


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
      {
        path:'/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) =>details(params.id)
      },
      {
        path:'/marathon-register/:id',
        element:<MarathonReg></MarathonReg>
      }
      ],
  },
  {
    path:'/dashBoard',
    Component:DashBoardLayout,
    children:[
      {
        path:'add-marathon',
        element:<PrivateRoute><AddMarathon></AddMarathon></PrivateRoute>
      },
      {
        path:'my-marathons',
        Component:MyMarathon
      }
    ]
  }
]);



