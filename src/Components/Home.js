import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"; 
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
        <div className="home-container">
            <Navbar/>
            <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">
                    Tu comida favorita entregada caliente y fresca
                </h1>
                <p className="primary-text">
                    Los chefs que cambian de comida se encargan 
de todo el trabajo de preparación, como preparar 
la comida, picar y marinar, para que puedas 
cocinar alimentos frescos.
                </p>
                <button className="secondary-button">
                    Ordena Ahora <FiArrowRight />{" "}
                </button>
            </div>
            <div className="home-image-section">
            <img src={BannerImage} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Home
