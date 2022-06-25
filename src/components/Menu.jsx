import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export function Menu() {
  return (
    <header>
      <div className="container__header">
        <div className="header__logo">
          <a href="index.html">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="container__iconos">
          <FontAwesomeIcon
            className="facebook"
            icon={faFacebook}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            className="instagram"
            icon={faInstagram}
          ></FontAwesomeIcon>
        </div>
        <div className="container__button">
          <div className="buttons">
            <h3>ENVIANOS UN WHATSAPP</h3>
          </div>
        </div>
      </div>
    </header>
  );
}
