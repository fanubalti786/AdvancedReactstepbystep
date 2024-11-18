import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import React from 'react'
import Home from "./pages/home/Home"
import About from './pages/about/About'
import ContactUs from './pages/contactUs/ContactUs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "/About",
    element: <About/>,
  },

  {
    path: "/ContactUs",
    element: <ContactUs/>,
  },
]);

export default function Navigation() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  )
}
