import React from "react";
import web from "../images/web.png";
import fac from "../images/fac.png";
import cursos from "../images/cursos.png";
import reservas from "../images/reservas.png";
import pasajes from "../images/pasajes.png";
export function Gallery() {
  return (
    <section id="Galeria" className="gallery">
      <div className="gallery__container">
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={web} alt="web" />
            <p>DISEÑO WEB</p>
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={fac} alt="FAC" />
            <p>SISTEMAS</p>
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={fac} alt="" />
            <p>SISTEMAS DE FACTURACION Y STOCK</p>
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={cursos} alt="" />
            <p>SISTEMAS CURSOS</p>
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={reservas} alt="" />
            <p>SISTEMAS DE RESERVA</p>
            <div className="overlay"></div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="contenedor-modal">
            <img src={pasajes} alt="" />
            <p>SISTEMAS DE PASAJES</p>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <script src="../js/gallery.js"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
      <script src="../js/main.js"></script>
    </section>
  );
}
