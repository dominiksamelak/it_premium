import React, { useEffect } from 'react';
import PC from "../img/services/pc.png"
import Phone from "../img/services/phone.png"
import Data from "../img/services/data.png"
import Printer from "../img/services/printer.png"
import Coop from "../img/services/companies.png"
import Other from "../img/services/other.png"
import "../styles/services.css"

export default function Services() {
  return(
    <div className="services-container">
      <span className='services-title'>Co znajdziesz w naszej ofercie?</span>
      <div className="services-left">
        <span className='down-up'></span>
        <img src={PC} alt="pc" className='pic-left'/>
        <div className="services-text">
          <span className='services-text-title'>Naprawa komputerów</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
          <span className='services-text-title'>Naprawa telefonów</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
        <img src={Phone} alt="phone" className='pic-right'/>
        <span className='up-down'></span>
      </div>
      <div className="services-left">
        <span className='down-up'></span>
        <img src={Printer} alt="printer" className='pic-left'/>
        <div className="services-text">
          <span className='services-text-title'>Naprawa drukarek</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
          <span className='services-text-title'>Odzyskiwanie danych</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
        <img src={Data} alt="data" className='pic-right'/>
        <span className='up-down'></span>
      </div>
      <div className="services-left">
        <span className='down-up'></span>
        <img src={Coop} alt="coop" className='pic-left'/>
        <div className="services-text">
          <span className='services-text-title'>Obsługa firm</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
          <span className='services-text-title'>Naprawa elektroniki użytkowej</span>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
        <img src={Other} alt="other" className='pic-right'/>
        <span className='up-down'></span>
      </div>

    </div>
  )
}