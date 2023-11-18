import React from 'react';
import backgroundImage from '../BackgroundImage.png'; 

export const About = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundColor: '#FFE1EE',
    padding: '0px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '100vw', 
    height: '100vh',
    color: '#000',
    position: 'center', 
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '100px auto 0',
    padding: '30px',
    background: '#ffd3da', 
    borderRadius: '10px', 
  };

  const headingStyle = {
    fontSize: '38px',
  };

  const paragraphStyle = {
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h2 style={headingStyle}>About Us</h2>
        <p style={paragraphStyle}>
          Welcome to our website! Our primary purpose is to make cooking hassle-free, offering you a simple
          and efficient way to prepare delicious meals. We aim to make a positive impact by reducing food
          waste, encouraging healthier eating habits, and cutting down on wasted time in the kitchen. Our
          platform is designed to generate healthy recipes based on the ingredients you have on hand, promoting
          a balanced and nutritious diet. Whether you're an experienced cook or just starting out, our website
          is made for people who want to cook and find recipes easily. We're here to simplify your culinary
          journey and help you enjoy the pleasures of home-cooked meals.
        </p>
        <p style={paragraphStyle}>
          For any inquiries or feedback, please feel free to contact us at:
        </p>
        <ul>
          <li style={paragraphStyle}>Email: <a href="mailto:dishdiscovery@gmail.com" style={{ color: '#0073e6' }}>dishdiscovery@gmail.com</a></li>
        </ul>
      </div>
    </div>
  );
}