import background from "../BackgroundImage.png";
import circle from "../ProfilePic.png";
import "./Profile.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useRecipeContext } from "../pages/RecipeContext";
import { useProfile } from "./ProfileContext";

const user = {
  name: "",
};

//Laya
export const Profile = () => {
  const { recipes } = useRecipeContext();
  const { profileData } = useProfile();

  const recipeBoxStyle = {
    background: "#E0E0E0",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "10px",
    marginLeft: "20px",
    marginRight: "20px",
    display: "flex",
    flexDirection: "column",
  };

  const recipeImageStyle = {
    width: "300px",
    height: "auto", 
    objectFit: "cover",
    borderRadius: "5px",
    alignSelf: "center",  
  };

  return (
    <div>
      <div className="App" style={{ backgroundImage: `url(${background})` }}>
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            className="avatar"
            src={circle}
            alt={"Photo of " + user.name}
            style={{
              width: 300,
              height: 300,
            }}
          />
        </div>
        <p>{profileData.userName}</p>
        <div className="container2">
          <div className="editButton">
            <Link to="/EditProfile" className="link" style={{ color: "black" }}>
              {" "}
              Edit Profile{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="rectangleBar2">
        <div className="head2"> Your Recipes </div>
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index} style={recipeBoxStyle}>
              <strong>{recipe.recipeName}</strong>
              <img
                src={recipe.recipeImage}
                alt={`Image for ${recipe.recipeName}`}
                style={recipeImageStyle}
              />
              <ul>
                {recipe.ingredients.map((ingredient, ingIndex) => (
                  <li key={ingIndex}>{ingredient}</li>
                ))}
              </ul>
              <p>
                {recipe.instruction.split("\n").map((line, lineIndex) => (
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
        <p>Here's a little about me: {profileData.aboutMe}</p>
      </div>
    </div>
  );
};
