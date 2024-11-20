import CustomLink from "./CustomLink";
import landingPhoto from "../components/img/landing_photos/landingpage-main.png";
import "../components/styles/landingsection.css"

function LandingSection() {
  return (
    <div className="landing-photo-container">
      <img src={landingPhoto} alt="main" className="landing-photo" />
      <div className="text">
        <h1 className="text-title">TEST</h1>
        <p className="text-subtitle">Test Test Test Test Test Test Test Test Test Test</p>
        <p className="text-description">
          Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
        </p>
        <CustomLink to="/applicationform" className="application-link">
          <span className="application-form">Formularz zgłoszenia</span>
        </CustomLink>
      </div>
    </div>
  );
}

export default LandingSection;
