import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import New from '../pages/contact/New';


const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home/>
        },

        {
            path:"/About",
            element: <About/>
        },

        {
            path:"/New",
            element: <New/>
        },

     
    ]
);

export default function Routing() {
  return (
    <RouterProvider router={router}/>
  )
}
