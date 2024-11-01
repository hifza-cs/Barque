// About.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/about.css';

const About = () => {
  const navigate = useNavigate();

  const handleAddMoreClick = () => {
    navigate('/add');
  };

  return (
    <div className="about-container">
      <div className="about-image-section">
        <img 
          src="https://baroque.pk/cdn/shop/files/02_Banner199.jpg?v=1728547051&width=500" 
          alt="Baroque Fashion" 
          className="about-image" 
        />
      </div>
      
      <h1 className="about-title">About Baroque</h1>
      
      <div className="about-content">
        <p>
          Baroque is a leading name in Pakistan's fashion industry, known for its luxurious unstitched fabrics and 
          ready-to-wear collections. With a commitment to blending tradition with contemporary fashion, Baroque uses 
          premium materials like khaddar and velvet, featuring intricate embroidery and timeless designs.
        </p>
        <button className="add-more-button" onClick={handleAddMoreClick}>
          Add More
        </button>
      </div>
    </div>
  );
};

export default About;
