// App.js
import React, { useState, useEffect } from "react";
import './App.css';
import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import Realizations from "./components/pages/realizations";
import Services from "./components/pages/services";
import PC from "./components/pages/pcfix";
import AppForm from "./components/pages/applicationform";
import ComapniesCoop from "./components/pages/companiescoop";
import DataRecovery from "./components/pages/Datarecovery";
import OtherElectronics from "./components/pages/otherfix";
import Phone from "./components/pages/phonefix";
import Printers from "./components/pages/printerfix";
import Loader from "./components/loader";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PriceList from "./components/Pricelist";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);  
    }, 1300);

    const navbarTimer = setTimeout(() => {
      setNavbarVisible(true); 
    }, 1500);  

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(navbarTimer);
    };
  }, []);

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <>
      <div className='container'>
        <Navbar isVisible={isNavbarVisible} />
        <main className='navbar-links'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/realizations' element={<Realizations />} />
            <Route path='/pcfix' element={<PC />} />
            <Route path='/applicationform' element={<AppForm />} />
            <Route path='/companiescoop' element={<ComapniesCoop />} />
            <Route path='/datarecovery' element={<DataRecovery />} />
            <Route path='/otherfix' element={<OtherElectronics />} />
            <Route path='/phonefix' element={<Phone />} />
            <Route path='/printerfix' element={<Printers />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/pricelist/:subpage" element={<PriceList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
