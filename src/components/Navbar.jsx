import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navStyle = {
    backgroundColor: '#F6CED5', // Light pink color
  };


  return (
    <div className='nav' style={navStyle}>
    <ul>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to="/feed">Recommended Recipes</Link>
      </li>
      <li>
        <Link to='/addrecipes'>Add Recipes</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
      <li>
        <Link to='/settings'>Settings</Link>
      </li>
      
    </ul>
  </div>
  )
}
