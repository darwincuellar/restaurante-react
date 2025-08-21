import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Nosotros</p>
        <h1 className="primary-heading">
          La comida es una parte importante de una dieta equilibrada
        </h1>
        <p className="primary-text">
          La comida constituye un elemento fundamental para mantener 
una dieta equilibrada, ya que aporta los nutrientes, vitaminas y 
minerales que el cuerpo necesita para funcionar correctamente.
        </p>
        <p className="primary-text">
          Una alimentación adecuada no solo proporciona la energía necesaria para realizar las actividades diarias, sino que también 
contribuye al desarrollo y mantenimiento de los órganos, músculos y huesos. Además, una dieta balanceada ayuda 
a fortalecer el sistema inmunológico, previene enfermedades y 
favorece el bienestar físico y mental.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Leer Más...</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver Vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;