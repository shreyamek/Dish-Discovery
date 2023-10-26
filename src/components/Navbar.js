import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <li> <a href="https://www.example.com" rel="noopener noreferrer">Home</a> </li>
        <li> <a href="https://www.example.com" rel="noopener noreferrer">Recommended Recipes</a> </li>
        <li> <a href="https://www.example.com" rel="noopener noreferrer">Saved Recipes</a> </li>
        <li> <a href="https://www.example.com" rel="noopener noreferrer">Add Recipes</a> </li>
        <li> <a href="https://www.example.com" rel="noopener noreferrer">Profile</a> </li>
      </ul>
    </div>
  );
}

export default Navbar;