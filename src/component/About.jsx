// About.jsx
import React from 'react';
import '../style/about.css';

const About = () => {
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
        <p>
          We offer a wide range of products, from casual wear to festive formal attire, allowing customers to personalize 
          their wardrobe with custom stitching options.
        </p>
        <p>
          Baroque ensures a seamless shopping experience with features such as priority stitching services, free shipping 
          within Pakistan, and easy exchange options. We also provide exclusive online promotions, special discounts, and early 
          access to new collections for our loyal customers.
        </p>
        <p>
          With customer satisfaction at the forefront, Baroque is committed to delivering high-quality products and 
          exceptional service. Explore our collections and indulge in the luxury of fashion with Baroque.
        </p>
        <button className="add-more-button">Add More</button>
      </div>
    </div>
  );
};

export default About;
