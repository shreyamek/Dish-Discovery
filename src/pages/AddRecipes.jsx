import React from 'react';

export const AddRecipes = () => {
  return (
    <div>
      <h2>Add Your Recipe</h2>
      <p>
        Share your favorite recipe with the community! Fill out the form below to 
        add your recipe to our collection.
      </p>

      <form>
        <div>
          <label htmlFor="recipeName">Recipe Name:</label>
          <input type="text" id="recipeName" name="recipeName" />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredients:</label>
          <textarea id="ingredients" name="ingredients"></textarea>
        </div>

        <div>
          <label htmlFor="instructions">Instructions:</label>
          <textarea id="instructions" name="instructions"></textarea>
        </div>

        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}