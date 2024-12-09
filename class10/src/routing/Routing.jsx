import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import Signup from '../pages/signup/Signup';

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home/>
        },

        {
            path:"/Signup",
            element: <Signup/>
        }


     
    ]
);

export default function Routing() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
