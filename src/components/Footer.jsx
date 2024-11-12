import { Link, useResolvedPath, useMatch } from "react-router-dom"
import logo from "./img/icons/logo_footer.png"
import "./styles/footer.css"

export default function Footer() {
  return(
    <div className="footer-container">
      <div className="footer-line"></div>
      <div className="footer-items">
        <div className="logo-div">
          <img src={logo} alt="logo" />
        </div>
        <ul className="about-us">
          <span className="footer-bold">O Nas</span>
          <CustomLink to="/contact">Kontakt</CustomLink>
          <CustomLink to="/contact">Recenzje klientów</CustomLink>
          <CustomLink to="/realizations">Realizacje</CustomLink>
          <CustomLink to="/application-form" className="application-form">Formularz zgłoszenia</CustomLink>
        </ul>
        <ul className="services">
          <span className="footer-bold">Usługi</span>
          <CustomLink to="/pcfix">Naprawa komputerów</CustomLink>
          <CustomLink to="/phonefix">Naprawa telefonów</CustomLink>
          <CustomLink to="/printerfix">Naprawa drukarek</CustomLink>
          <CustomLink to="/datarecovery">Odzyskiwanie danych</CustomLink>
          <CustomLink to="/companiescoop">Obsługa firm</CustomLink>
          <CustomLink to="/otherfix">Naprawa elektroniki użytkowej</CustomLink>
        </ul>
        <div className="location">
          <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0005519890888!2d16.90730407762662!3d52.46101744059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704436aa34834f1%3A0x72038cebaf375f7!2sIT-PREMIUM%20Centrum%20Serwisowe%20Serwis%20laptop%C3%B3w%2C%20telefon%C3%B3w%2C%20drukarek%2FPROFESJONALNE%20ODZYSKIWANIE%20DANYCH!5e0!3m2!1spl!2spl!4v1730674451313!5m2!1spl!2spl"
                    width="400"
                    height="250"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabIndex="0"
          />
        </div>
      </div>
      <div className="authors">
        <span>Desing by Macaroni Pepperoni Realizacja by Harry Potter</span>
      </div>
    </div>
  )

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
}