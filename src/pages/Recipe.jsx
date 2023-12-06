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

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };
  
  const formatInstructions = (instructions) => {
    const cleanedInstructions = stripHtmlTags(instructions);
    const steps = cleanedInstructions.split('. ');
  
    return steps.map((step, index) => (
      <p key={index}>
        <strong>{index + 1}.</strong> {step}
      </p>
    ));
  };

  return (
    <div className="App">
    <div className="recipe">
      <h2>{recipeData.title}</h2>
      <div className="recipeImg">
        <img src={recipeData.image} alt={recipeData.title} />
      </div>
      <p className="recipeDescription" dangerouslySetInnerHTML={{ __html: recipeData.summary }} />
      <h3>Ingredients:</h3>
      <ul className="recipeIngredients">
        {recipeData.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      {formatInstructions(recipeData.instructions)}
    </div>
    </div>
  );
}

export default Recipe;