import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to the Life Care Medical orgamization, a sanctuary for holistic wellness and personalized care. Here, our dedicated team of professionals is committed to providing comprehensive healthcare services tailored to your individual needs. Whether you're seeking preventive care, managing a chronic condition, or exploring wellness options, our Life Care Place is here to empower you towards a fulfilling and vibrant life.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
        
        </div>
      </div>
    </>
  );
};

export default Hero;
