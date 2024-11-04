import React, { useEffect } from 'react';
import landingPhoto from "../img/landing_photos/landingpage-main.png"
import "../styles/home.css"


export default function Home() {
  return(
    <div className="home-container">
      <img src={landingPhoto} alt="main" className='landing-photo' />
    
    </div>

  )
}