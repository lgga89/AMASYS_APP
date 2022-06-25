import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";

export function Information() {
  return (
    <div className="information">
      <section className="form-register">
        <input
          class="controls"
          type="text"
          name="nombres"
          id="nombres"
          placeholder="Nombre"
        />
        <input
          class="controls"
          type="text"
          name="apellidos"
          id="apellidos"
          placeholder="Apellido"
        />
        <input
          class="controls"
          type="text"
          name="empresa"
          id="empresa"
          placeholder="Empresa"
        />
        <input
          class="controls"
          type="text"
          name="consulta"
          id="consulta"
          placeholder="Motivo de la consulta"
        />
        <input
          class="controls"
          type="password"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          class="controls"
          type="number"
          name="telefono"
          id="telefono"
          placeholder="Telefono"
        />
        <textarea
          name="introducir_mensaje"
          id="consulta"
          placeholder="Consulta"
        ></textarea>
        <input className="botons" type="submit" value="Enviar" />
      </section>
      <section className="contact">
        <div className="contact__logo">
          <a href="index.html">
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <div className="information__icons">
          <FontAwesomeIcon
            className="email"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          <p>ESCRIBENOS A:</p>
          <p>info@amasys.com.ar</p>
          <FontAwesomeIcon
            className="whatsapp"
            icon={faWhatsapp}
          ></FontAwesomeIcon>
          <p>WHATSAPP</p>
          <p>(+54) 91166241227</p>
        </div>
      </section>
    </div>
  );
}
