import React from 'react'
import background from '../BackgroundImage.png';

export default function Home () {
  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
        <div className="mainTitle"> Dish Discovery </div>
        <div className="sideText"> Make cooking hassle-free. </div>
        <div className="search-bar"> <input type="text" placeholder="Search for a Recipe..." /> <button> Search </button> </div>        
    </div>
      
  )
  }
