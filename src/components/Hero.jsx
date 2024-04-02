import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1 className="animated-text">{title}</h1>
        <p>
          Welcome to the ZeeCare ZeeCare Institute, your trusted healthcare provider. Here, our dedicated team of professionals is committed to providing comprehensive healthcare services tailored to your individual needs.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
      </div>
    </div>
  );
};

export default Hero;

// CSS for the animated gradient effect
const styles = `
 

  .animated-text {
    animation: rainbow 5s infinite;
  }

  @keyframes rainbow {
    0% { color: #ff0000; }
    
    86% { color: #8000ff; }
    100% { color: #ff0000; }
  }
`;

// Create a style element and append CSS to the head of the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
