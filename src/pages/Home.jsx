import React from 'react'
import background from '../BackgroundImage.png';
import RecipeCard from '../components/RecipeCard';
import Popular from '../components/Popular';

export default function Home () {
  return (
    <div>
      <div className="App" style={{backgroundImage: `url(${background})`}}>
          <div className="mainTitle"> Dish Discovery </div>
          <div className="sideText"> Make cooking hassle-free. </div>
          <div className="search-bar"> <input type="text" placeholder="Search for a Recipe..." /> <button> Search </button> </div>      
          <br/>  
      </div>
      <div className="heading1"> Popular Recipes </div>
      <div className="homefeed">
        <Popular/>
      </div>
      <div className="heading1"> Frequently Asked Questions </div>
    </div>
      
  )
  }
