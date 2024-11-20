import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Button from './components/button/Button'
// import img from './assets/image.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "./components/button/button.css"
import Input from './components/input/Input'
export default function App() {
  return (
    <div>
      <Header/>
      <h1>App.js</h1>
      <Button/>
      <Footer/>
      {/* <img src={img} /> */}
      <img src={require("./assets/image.png")} />
      <br/>
      <img src='/logo192.png' />
      <br/>
      <img src="https://unsplash.com/photos/body-of-water-under-trees-okLTnDZ9HOM" />



      <Input/>
      
    </div>
  )
}
