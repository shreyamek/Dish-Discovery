import React from 'react';

export const AddRecipes = () => {
  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    border: '1px solid lightblue',
    borderRadius: '8px',
  };

  const outerContainerStyle = {
    backgroundColor: 'lightgrey',
    padding: '10px',
    border: '1px solid grey',
    borderRadius: '8px',
  };

  const lineStyle = {
    backgroundColor: 'lightblue',
    height: '2px',
    margin: '15px 0',
  };

  const submitButtonStyle = {
    backgroundColor: '#5A5A5A',
    border: '1px solid grey',
    padding: '15px 30px', // Larger padding for size
    color: 'white',
    borderRadius: '8px',
    fontSize: '20px', // Larger font size
  };

  return (
    <div>
      <div style={outerContainerStyle}>
        <h2>Add Your Recipe</h2>
        <p>
          Share your favorite recipe with the community! Fill out the form below to 
          add your recipe to our collection.
        </p>

        <div style={containerStyle}>
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
    </div>
  );
}




