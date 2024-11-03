import logo from "./img/icons/logo_footer.png"
import "./styles/footer.css"
export default function Footer() {
  return(
    <div className="footer-container">
      <div className="footer-items">
        <div className="logo-div">
          <img src={logo} alt="logo" />
        </div>
        <div className="about-us">
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
        </div>
        <div className="services">
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
          <span>Kontakt</span>
        </div>
        <div className="location">
          <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2431.0005519890888!2d16.90730407762662!3d52.46101744059361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4704436aa34834f1%3A0x72038cebaf375f7!2sIT-PREMIUM%20Centrum%20Serwisowe%20Serwis%20laptop%C3%B3w%2C%20telefon%C3%B3w%2C%20drukarek%2FPROFESJONALNE%20ODZYSKIWANIE%20DANYCH!5e0!3m2!1spl!2spl!4v1730674451313!5m2!1spl!2spl"
                    width="400"
                    height="250"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
          />
        </div>
      </div>
      <div className="authors">
        <span>Desing by Macaroni Pepperoni Realizacja by Harry Potter</span>
      </div>
    </div>
  )
}