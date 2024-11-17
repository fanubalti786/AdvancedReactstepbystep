import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
import img from './assets/image.png'
export default function App() {
  return (
    <div>
      <Header/>
      <h1>App.js</h1>
      <Button/>
      <Footer/>
      <img src={img} />
    </div>
  )
}
