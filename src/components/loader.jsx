import React from "react";
import "./styles/loader.css"; 
import Logo from "../components/img/icons/logo_footer.png"

export default function LoadingAnimation() {
  return (
    <div className="loading-container">

      <img src={Logo} alt="" className="logo-animation" />
    </div>
  );
}
