import { useState } from 'react'
import './App.css'
import Home from "./components/pages/home"
import Contact from "./components/pages/contact"
import Realizations from "./components/pages/realizations"
import Services from "./components/pages/services"
import PC from "./components/pages/pcfix"
import AppForm from "./components/pages/applicationform"
import ComapniesCoop from "./components/pages/companiescoop"
import DataRecovery from "./components/pages/datarec"
import OtherElectronics from "./components/pages/otherfix"
import Phone from "./components/pages/phonefix"
import Printers from "./components/pages/printerfix"

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
          <Route path='/pcfix' element={<PC/>} />
          <Route path='/applicationform' element={<AppForm/>} />
          <Route path='/companiescoop' element={<ComapniesCoop/>} />
          <Route path='/daterec' element={<DataRecovery/>} />
          <Route path='/otherfix' element={<OtherElectronics/>} />
          <Route path='/phonefix' element={<Phone/>} />
          <Route path='/printerfix' element={<Printers/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      <Footer />
    </div>
 

   </>
  )
}

export default App
