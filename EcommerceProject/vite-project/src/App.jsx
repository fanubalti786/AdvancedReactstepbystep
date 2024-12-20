import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NoPage from './pages/noPage/NoPage';
// import { Button } from '@mui/material'


export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/*' element={<NoPage />} >


          </Route>
        </Routes>
      </Router>
    </div>
  )
}
