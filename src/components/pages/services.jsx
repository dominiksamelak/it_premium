import { Link, useResolvedPath, useMatch } from "react-router-dom"
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
          <CustomLink to="/pcfix" className='services-text-link'><span className='services-text-title'>Naprawa komputerów</span></CustomLink>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
         <CustomLink to="/phonefix" className='services-text-link'><span className='services-text-title'>Naprawa telefonów</span></CustomLink>
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
          <CustomLink to="/printerfix" className='services-text-link'><span className='services-text-title'>Naprawa drukarek</span></CustomLink>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
          <CustomLink to="/datarecovery" className='services-text-link'><span className='services-text-title'>Odzyskiwanie danych</span></CustomLink>
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
          <CustomLink to="/companiescoop" className='services-text-link'><span className='services-text-title'>Obsługa firm</span></CustomLink>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
      </div>
      <div className="services-right">
        <div className="services-text-right">
          <CustomLink to="/otherfix" className='services-text-link'><span className='services-text-title'>Naprawa elektroniki użytkowej</span></CustomLink>
          <span className='services-text-desc'>testtesttesttesttesttesttesttesttesttesttesttesttesttestt
            esttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest</span>
        </div>
        <img src={Other} alt="other" className='pic-right'/>
        <span className='up-down'></span>
      </div>
      <div className="services-contact">
        <span className='services-contact-text'>
          W razie jakichkolwiek pytań, zapraszamy do kontaktu
        </span>
        <span className='services-contact-button'>
          Kontakt
        </span>
      </div>
    </div>
  )

  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <div className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </div>
    );
  }
}