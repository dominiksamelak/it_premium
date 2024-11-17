import DataRec from "../img/landing_photos/datarec-main.png"
import "../styles/datarec.css"
import PriceList from "../Pricelist.jsx";

export default function DataRecovery() {
  return(
    <div className="datarec-container">
        <div className="landing-photo-container">
          <img src={DataRec} alt="datarec" className='datarec-landing-photo'/>
          <div className="text">
          <span className="text-title">TEST</span>
          <span className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</span>
        </div>
      </div>
        <span className='pricelist-text'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        </span>
        <PriceList subpage='datarecovery'/>
    </div>
  )
}