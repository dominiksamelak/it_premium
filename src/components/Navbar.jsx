import { Link, useResolvedPath, useMatch } from "react-router-dom"
import "./styles/navbar.css"
import mail from "./img/icons/Mail.png"
import mapPin from "./img/icons/Map_Pin.png"
import phone from "./img/icons/Phone.png"
import facebook from "./img/icons/Social icons.png"
import logo from "./img/icons/logo_navbar.png"

export default function Navbar() {
  return <nav className="navbar">
    <div className="navbar-top">
      <div className="navbar-phone-number">
        <span className="phone-icon">
          <img src={phone} alt="phone" /> 
        </span>
        <span className="phone-number">
          +48 784 784 957
        </span>
      </div>
      <div className="navbar-socials">
        <span>
          <img className="mappin-icon" src={mapPin} alt="pin" /> 
        </span>
        <span>
          <img className="mail-icon" src={mail} alt="mail" /> 
        </span>
        <span className="mail-adress">
          biuro@it-premium.pl
        </span>
        <span>
          <img className="facebook-icon" src={facebook} alt="facebook" /> 
        </span>
      </div>
    </div>
    <div className="navbar-bottom">
      <ul className="navbar-links">
        <CustomLink to="/home">Strona główna</CustomLink>
        <CustomLink to="/services">Usługi</CustomLink>
        <img src={logo} alt="logo" className="logo"/>
        <CustomLink to="/realizations">Realizacje</CustomLink>
        <CustomLink to="/contact" className="kontakt-link">Kontakt</CustomLink>
      </ul>
    </div>
  </nav>
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}