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
      <span className="text-title">TEST</span>
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
        <span className='description-text-two'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni </span>
        <span className='description-text-three'>Excepteur sint occaecat cupidatat non  deserunt mollit anim id est laborum! </span>
      </div>
      <img src={descPhotoOne} alt="photo" className='desc-photo' />
    </div>
    <div className="description-two">
      <img src={descPhotoTwo} alt="photo" className='desc-photo' />
      <div className="description-two-container">
        <span className='description-text-one'>testtesttesttesttest</span>
        <span className='description-text-two'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu</span>
        <span className='description-text-three'>Excepteur sint occaecat cupidatat non  deserunt mollit anim id est laborum!</span>
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
  <div className="warranty">
    <span className='color-updown-two-warranty'></span>
    <div className="warranty-desc">
      <span className='warranty-title'>Gwarancja</span>
      <span className='warranty-text'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
         suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</span>
      <span className='warranty-text'>Neque porro quisquam est, qui dolorem ipsum quia dolor
         sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.</span>
      <span className='warranty-text'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</span>
    </div>
    <span className='color-updown-warranty'></span>
  </div>
</div>
  )
}
