import { useState } from 'react'
import './App.css'
import Home from "./components/pages/home"
import Contact from "./components/pages/contact"
import Realizations from "./components/pages/realizations"
import Services from "./components/pages/services"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <div className='container'>
      <Navbar/>
      <div className='navbar-links'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/realizations' element={<Realizations/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
 

   </>
  )
}

export default App
