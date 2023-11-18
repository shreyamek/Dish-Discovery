import backgroundImage from '../BackgroundImage.png';
import React, { useState } from 'react';

export const AddRecipes = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [instruction, setInstruction] = useState('');

  const instructionInputStyle = {
    width: '90%',
    height: '20vh',
    resize: 'none', 
  };

  const inputStyle = {
    width: '20%', 
    height: '2vh',
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: '#FFE1EE',
    padding: '0px',
    borderRadius: '0px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: '100vw',
    height: '100vh',
    color: '#000',
    position: 'center',
  };

  const contentStyle = {
    maxWidth: '1000px',
    margin: '50px auto 0',
    padding: '15px',
    background: '#dbead2',
    borderRadius: '10px',
  };

  const headingStyle = {
    fontSize: '38px',
  };

  const paragraphStyle = {
    fontSize: '20px',
  };

  const handleRecipeNameChange = (e) => {
    setRecipeName(e.target.value);
  };

  const handleIngredientChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleAddIngredient = () => {
    if (ingredient.trim() !== '') {
      setIngredients([...ingredients, ingredient]);
      setIngredient('');
    }
  };

  const handleInstructionChange = (e) => {
    setInstruction(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recipe Submitted:', {
      recipeName,
      ingredients,
      instruction,
    });
  };
  
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>Add Your Recipe</h1>
        <p style={paragraphStyle}>
          Share your favorite recipe with the community! Fill out the form below to add your recipe to our collection.
        </p>
        <form onSubmit={handleSubmit}>
          <div>
          <label htmlFor="recipeName">Recipe Name:</label>
            <input
              style={inputStyle} 
              type="text"
              id="recipeName"
              name="recipeName"
              value={recipeName}
              onChange={handleRecipeNameChange}
            />
          </div>
          <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '15px 0' }}></div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <input
              style={inputStyle} // Apply the style here
              type="text"
              id="ingredient"
              name="ingredient"
              value={ingredient}
              onChange={handleIngredientChange}
            />
            <button
              style={{
                backgroundColor: '#5A5A5A',
                border: '1px solid grey',
                padding: '10px',
                color: 'white',
                borderRadius: '5px',
                fontSize: '12px', 
                marginLeft: '10px',
              }}
              type="button"
              onClick={handleAddIngredient}
            >
              ADD
            </button>
            <ul>
              {ingredients.map((ing, index) => (
                <li key={index} style={{ fontSize: '14px' }}>{ing}</li> // Adjusted font size
              ))}
            </ul>
          </div>
          <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '1px 0' }}></div>
          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea
              style={instructionInputStyle} 
              id="instructions"
              name="instructions"
              value={instruction}
              onChange={handleInstructionChange}
            />
          </div>
          <div style={{ backgroundColor: '#dbead2', height: '2px', margin: '15px 0' }}></div>
          <button
            style={{
              backgroundColor: '#5A5A5A',
              border: '1px solid grey',
              padding: '15px 30px',
              color: 'white',
              borderRadius: '8px',
              fontSize: '17px',
            }}
            type="submit"
          >
          SUBMIT RECIPE
        </button>
      </form>
    </div>
  </div>
);
          }
          export default AddRecipes;
