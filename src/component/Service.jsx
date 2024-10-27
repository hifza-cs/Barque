import React from 'react';
import './service.css'; // Importing the CSS file for styles

const servicesData = [
  {
    title: 'Custom Clothing Design',
    description: 'Tailored designs to create unique clothing pieces that express your style.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/158_e8e46618-8afc-489a-9991-a762670c7f8d.jpg?v=1729159021&width=500' // Replace with actual image URL
  },
  {
    title: 'Fashion Consultation',
    description: 'Personalized fashion advice to help you choose the right outfits for any occasion.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/65_981b11f5-4175-4dec-abc5-d47455ebb6f7.jpg?v=1728045364&width=500' // Replace with actual image URL
  },
  {
    title: 'E-commerce Store Setup',
    description: 'End-to-end solutions for launching your online clothing store.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/126_28c2f46e-55a1-443b-bda8-bebc380239fc.jpg?v=1714810106&width=500' // Replace with actual image URL
  },
  {
    title: 'Branding & Marketing',
    description: 'Strategies to enhance your clothing brand’s visibility and reach.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/170_e27f12c7-745b-48b3-b54c-564fde719c54.jpg?v=1729159108&width=500' // Replace with actual image URL
  },
  {
    title: 'Product Photography',
    description: 'Professional photography to showcase your clothing items beautifully.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/18_6378c8d4-df33-4afb-9993-f11d7c8f987a.jpg?v=1727522115&width=500' // Replace with actual image URL
  },
  {
    title: 'Customer Engagement Strategies',
    description: 'Engaging strategies to build a loyal customer base and increase sales.',
    imageUrl: 'https://baroque.pk/cdn/shop/files/108_ea3fb66d-4b5c-4347-992c-9c55fc67af37.jpg?v=1725610996&width=500' // Replace with actual image URL
  },
];

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-heading">Our Services</h1>
      <div className="service-content">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img className="service-image" src={service.imageUrl} alt={service.title} />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
