import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from '../pages/home/Home';
import About from '../pages/about/About';


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
    ]
);

export default function Routing() {
  return (
    <RouterProvider router={router}/>
  )
}
