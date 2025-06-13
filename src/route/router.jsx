import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../Header/Login";
import Register from "../Header/Register";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {index : true , Component: Home},
        {
            path: '/login',
            Component:Login
        },
        {
            path: '/register',
            Component:Register
        },
    ]
  },
]);