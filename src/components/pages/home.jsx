import React, { useEffect } from 'react';
import landingPhoto from "../img/landing_photos/landingpage-main.png"
import "../styles/home.css"
import descPhotoOne from "../img/home/desc-photo-one.png"
import descPhotoTwo from "../img/home/desc-photo-two.png"

export default function Home() {
  return(
<div className="home-container">
  <div className="landing-photo-container">
    <img src={landingPhoto} alt="main" className="landing-photo" />
    <div className="text">
      <span className="text-title">Test</span>
      <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
      <span className="text-description">
        Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
      </span>
      <span className='application-form'>Formularz zgłoszenia</span>
    </div>
  </div>
  <div className="description">
    <div className="description-one">
      <span className='color-updown'></span>
      <div className="description-one-container">
        <span className='description-text-one'>testtesttesttesttest</span>
        <span className='description-text-two'>testtesttesttesttesttesttesttesttesttesttesttest</span>
        <span className='description-text-three'>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
      </div>
      <img src={descPhotoOne} alt="photo" className='desc-photo-one' />
    </div>
    <div className="description-two">
      <img src={descPhotoTwo} alt="photo" className='desc-photo-one' />
      <div className="description-one-container">
        <span className='description-text-one'>testtesttesttesttest</span>
        <span className='description-text-two'>testtesttesttesttesttesttesttesttesttesttesttest</span>
        <span className='description-text-three'>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
      </div>
      <span className='color-updown'></span>
    </div>
  </div>
</div>
  )
}