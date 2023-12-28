import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            odio minima harum, soluta suscipit voluptate ducimus deleniti earum
            officiis libero ipsa reprehenderit beatae optio dolorem quo
            praesentium quis, vitae commodi?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
