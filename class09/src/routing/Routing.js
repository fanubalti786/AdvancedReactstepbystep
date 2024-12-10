import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import Signin from '../pages/signin/Signin';
import Login from '../pages/login/Login';
import PrivateRouting from './PrivateRouting';
import PublicRouting from './PublicRouting';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <PrivateRouting><Home/></PrivateRouting>
        },

        {
            path:"/Signin",
            element: <PublicRouting><Signin/></PublicRouting> 
        },

        {
            path:"/Login",
            element:<PublicRouting><Login/></PublicRouting> 
        },

     
    ]
);

export default function Routing() {
  return (
    <RouterProvider router={router}/>
  )
}
