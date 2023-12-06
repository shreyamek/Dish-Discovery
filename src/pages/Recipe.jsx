import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import background from '../BackgroundImage.png';
import './Recipe.css'

function Recipe() {
  const { recipeId } = useParams();
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${process.env.REACT_APP_API_KEY}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipe data');
        }
        return response.json();
      })
      .then((data) => setRecipeData(data))
      .catch((error) => console.error(error));
  }, [recipeId]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App" style={{backgroundImage: `url(${background})`}}>
    <div className="recipe">
      <h2>{recipeData.title}</h2>
      <div className="recipeImg">
        <img src={recipeData.image} alt={recipeData.title} />
      </div>
      <h3>Ingredients:</h3>
      <ul>
        {recipeData.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <div dangerouslySetInnerHTML={{ __html: recipeData.instructions }} style={{ textAlign: 'left' }} />
    </div>
    </div>
  );
}

export default Recipe;