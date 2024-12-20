import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
export default function Layout({children}) {
  return (
    <div className='main-content'>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}
