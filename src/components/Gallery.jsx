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
          <div className="box">
            <img src={web} alt="web" />
            <div className="hover">
              <h1>DISEÑO WEB</h1>
            </div>
          </div>
        </div>

        <div className="photo__gallery">
          <div className="box">
            <img src={fac} alt="FAC" />
            <div className="hover">
              <h1>SISTEMAS</h1>
            </div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="box">
            <img src={fac} alt="" />
            <div className="hover">
              <h1>SISTEMAS DE FACTURACION Y STOCK</h1>
            </div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="box">
            <img src={cursos} alt="" />
            <div className="hover">
              <h1>SISTEMAS CURSOS</h1>
            </div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="box">
            <img src={reservas} alt="" />{" "}
            <div className="hover">
              <h1>SISTEMAS DE RESERVA</h1>
            </div>
          </div>
        </div>
        <div className="photo__gallery">
          <div className="box">
            <img src={pasajes} alt="" />
            <div className="hover">
              <h1>SISTEMAS DE PASAJES</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
