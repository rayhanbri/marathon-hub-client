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
import AuthHook from "../Components/Hooks/AuthHook";
import Marathons from "../Home/Marathons";
import AllMarathon from "../Components/Marathon/AllMarathon";
import ApplyList from "../DashBoard/ApplyList/ApplyList";
import ErrorPage from "../Components/Error.jsx/ErrorPage";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
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
      },
      {
        path:'/show-marathon',
        element:<PrivateRoute><AllMarathon></AllMarathon></PrivateRoute>
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
        element:<PrivateRoute><MyMarathon></MyMarathon></PrivateRoute>
      },
      {
        path:'apply-list',
        element:<PrivateRoute><ApplyList></ApplyList></PrivateRoute>
      }
    ]
  }
]);



