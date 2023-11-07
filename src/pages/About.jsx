import React from 'react';

export const About = () => {
  const containerStyle = {
    backgroundColor: '#FFE1EE',
    padding: '70px',  // Increase padding to make it a bit bigger
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',  // Increase the maximum width
    margin: '20px auto 0',  // Add margin on top
    color: '#000',  // Set text color to black
  };

  const headingStyle = {
    fontSize: '34px',
  };

  const paragraphStyle = {
    fontSize: '20px',
  };

  return (
    <div style={containerStyle}>
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
        <li style={paragraphStyle}>Email: <a href="mailto:dishdiscovery@gmail.com" style={{ color: '#0073e6' }
      }>dishdiscovery@gmail.com</a></li>
      </ul>
    </div>
  );
}