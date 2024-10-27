import React from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate();

  const handleAddMoreClick = () => {
    navigate('/more-about');
  };

  return (
    <div className="about-container">
      <button>Add More</button>
    </div>
  );
};

export default About;
