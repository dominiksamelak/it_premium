import "react-google-reviews/dist/index.css";
import "../styles/home.css";
import DescriptionSection from "../DescriptionSectionHone.jsx";
import LandingSection from "../LandingSectionHome.jsx";
import WarrantySection from "../WarrantySectionHome.jsx";

export default function Home() {
  return (
    <div className="home-container">
      <LandingSection />
      <DescriptionSection />
      <WarrantySection />
    </div>
  );
}