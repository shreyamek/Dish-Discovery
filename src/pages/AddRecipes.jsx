import React from 'react';

export const AddRecipes = () => {
  const containerStyle = {
    backgroundColor: '#b3d4e8',
    padding: '40px', 
    borderRadius: '10px',  
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    maxWidth: '800px',  
    margin: '40px auto 0',  
    color: 'black', 
  };

  const headingStyle = {
    fontSize: '35px',
  };

  const paragraphStyle = {
    fontSize: '17px',
  };

  const lineStyle = {
    backgroundColor: '#b3d4e8',
    height: '2px',
    margin: '15px 0',
  };

  const submitButtonStyle = {
    backgroundColor: '#5A5A5A',
    border: '1px solid grey',
    padding: '15px 30px', 
    color: 'white',
    borderRadius: '8px',
    fontSize: '17px', 
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Add Your Recipe</h1>
      <p style={paragraphStyle}>
        Share your favorite recipe with the community! Fill out the form below to 
        add your recipe to our collection.
      </p>
      <div>
        <form>
          <div>
            <label htmlFor="recipeName">Recipe Name:</label>
            <input type="text" id="recipeName" name="recipeName" />
          </div>
          <div style={lineStyle}></div>
          <div>
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" name="ingredients"></textarea>
          </div>
          <div style={lineStyle}></div>
          <div>
            <label htmlFor="instructions">Instructions:</label>
            <textarea id="instructions" name="instructions"></textarea>
          </div>
          <div style={lineStyle}></div>
          <button style={submitButtonStyle} type="submit">
            SUBMIT RECIPE
          </button>
        </form>
      </div>
    </div>
  );
}