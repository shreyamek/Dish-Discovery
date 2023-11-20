import background from '../BackgroundImage.png';
import circle from '../ProfilePic.png';
import './Profile.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useRecipeContext } from '../pages/RecipeContext';


const user = {
  name: '@User1',
  imageSize: 200,
};

//Laya
export const Profile = () => {
  const { recipes } = useRecipeContext();

  const recipeBoxStyle = {
    background: '#E0E0E0', 
    padding: '10px',
    margin: '10px 0',
    borderRadius: '10px',
   
  };

  return (
    <div>
      <div className="App" style={{backgroundImage: `url(${background})`}}>
        <br/><br/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        className="avatar"
        src={circle}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </div>
        <h2>{user.name}</h2>
        <div className='container2'>
          <div className="editButton">
            <Link to="/EditProfile" className="link"style={{ color: 'black'}}> Edit Profile </Link>
          </div>
        </div>
      </div>

      <div className="rectangleBar">
        <div className="head2"> Bookmarks </div>
      </div>
      <div className="rectangleBar2">
        <div className="head2"> Your Recipes </div>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} style={recipeBoxStyle}>
              <strong>{recipe.recipeName}</strong>
              <ul>
                {recipe.ingredients.map((ingredient, ingIndex) => (
                  <li key={ingIndex}>{ingredient}</li>
                ))}
              </ul>
              <p>
                {recipe.instruction.split('\n').map((line, lineIndex) => (
                  <span key={lineIndex}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rectangleBar3">
        <div className="head2"> Folders </div>
      </div>
      <div className="rectangleBar4">
        <div className="head2"> About Me </div>
      </div>
    </div>
  )
}