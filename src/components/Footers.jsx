import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
export function Footers() {
  return (
    <div className="foor">
      <div className="container__footer">
        <div className="footer__logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="footer__iconos">
          <FontAwesomeIcon
            className="facebook"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="instagram"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </div>
        <div className="footer__button">
          <div className="button">
            <h3>ENVIANOS UN WHATSAPP</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
