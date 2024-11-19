import { Link, useResolvedPath, useMatch } from 'react-router-dom';
import './styles/navbar.css';
import mail from './img/icons/Mail.png';
import mapPin from './img/icons/Map_Pin.png';
import phone from './img/icons/Phone.png';
import facebook from './img/icons/social_icon.png';
import logo from './img/icons/logo_navbar.png';

export default function Navbar({ isVisible }) {
  return (
    <h1>
      <img src={logo} alt="logo" />
    </h1>
  );
}

// export default function Navbar({ isVisible }) {
//   return (
//     <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
//       <div className="navbar-container">
//         <div className="navbar-top">
//           <div className="navbar-phone-number">
//             <span className="phone-icon">
//               <img src={phone} alt="phone" />
//             </span>
//             <span className="phone-number">+48 784 784 957</span>
//           </div>
//           <div className="navbar-socials">
//             <span>
//               <a
//                 href="https://www.google.pl/maps/place/IT-PREMIUM+Centrum+Serwisowe+Serwis+laptop%C3%B3w,+telefon%C3%B3w,+drukarek%2FPROFESJONALNE+ODZYSKIWANIE+DANYCH/@52.4610174,16.9073041,17z/data=!4m6!3m5!1s0x4704436aa34834f1:0x72038cebaf375f7!8m2!3d52.4610142!4d16.909879!16s%2Fg%2F11cryfrr66?entry=ttu&g_ep=EgoyMDI0MTExMC4wIKXMDSoASAFQAw%3D%3D"
//                 target="_blank"
//               >
//                 <img className="mappin-icon" src={mapPin} alt="pin" />
//               </a>
//             </span>
//             <span>
//               <img className="mail-icon" src={mail} alt="mail" />
//             </span>
//             <span className="mail-adress">biuro@it-premium.pl</span>
//             <span>
//               <a
//                 href="https://www.facebook.com/ITPremiumCentrumSerwisowe/"
//                 target="_blank"
//               >
//                 <img className="facebook-icon" src={facebook} alt="facebook" />
//               </a>
//             </span>
//           </div>
//         </div>
//         <div className="navbar-mid"></div>
//         <div className="navbar-bottom">
//           <ul className="navbar-links">
//             <CustomLink to="/home" className="navbar-links-list">
//               <span className="navbar-link-text">Strona główna</span>
//             </CustomLink>
//             <CustomLink to="/services" className="navbar-links-list">
//               <span className="navbar-link-text">Usługi</span>
//             </CustomLink>
//             {/* <img src={logo} alt="logo" className="logo" /> */}
//             <CustomLink to="/realizations" className="navbar-links-list">
//               <span className="navbar-link-text">Realizacje</span>
//             </CustomLink>
//             <CustomLink to="/contact" className="contakt-link-list">
//               <span className="navbar-link-contact">Kontakt</span>
//             </CustomLink>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
