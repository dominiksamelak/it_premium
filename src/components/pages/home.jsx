import React, { useEffect } from 'react';
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
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
      <span className="text-title">Messi to karzeł a Barca to chuj</span>
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
        <span className='description-text-one'>lorem </span>
        <span className='description-text-two'>lorem lorem lorem lorem lorem lorem </span>
        <span className='description-text-three'>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </span>
      </div>
      <img src={descPhotoOne} alt="photo" className='desc-photo' />
    </div>
    <div className="description-two">
      <img src={descPhotoTwo} alt="photo" className='desc-photo' />
      <div className="description-two-container">
        <span className='description-text-one'>testtesttesttesttest</span>
        <span className='description-text-two'>testtesttesttesttesttesttesttesttesttesttesttest</span>
        <span className='description-text-three'>testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        <div className="google-reviews-desc">
          <ReactGoogleReviews 
            layout="badge" 
            featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
          />
        </div>

      </div>
      <span className='color-updown-two'></span>
    </div>
    <div className='google-reviews'>
      <ReactGoogleReviews 
        layout="carousel" 
        featurableId="f9a57238-df62-4c52-8448-6d9130fdedd3"
      />
    </div>
  </div>
</div>
  )
}
