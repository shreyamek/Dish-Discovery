import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='nav'>
    <ul>
      <li>
        <Link to="/Home">Home</Link>
      </li>
      <li>
        <Link to="/feed">Recommended Recipes</Link>
      </li>
      <li>
        <Link to='/savedrecipes'>Saved Recipes</Link>
      </li>
      <li>
        <Link to='/addrecipes'>Add Recipes</Link>
      </li>
      <li>
        <Link to='/profile'>Profile</Link>
      </li>
    </ul>
  </div>
  )
}
