import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import Signin from '../pages/signin/Signin';
import Login from '../pages/login/Login';
import PrivateRouting from './PrivateRouting';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <PrivateRouting><Home/></PrivateRouting>
        },

        {
            path:"/Signin",
            element: <Signin/>
        },

        {
            path:"/Login",
            element: <Login/>
        },

     
    ]
);

export default function Routing() {
  return (
    <RouterProvider router={router}/>
  )
}
