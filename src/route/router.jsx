import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from "../Layout/Root";
import Home from "../Home/Home";


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {index : true , Component: Home},
    ]
  },
]);