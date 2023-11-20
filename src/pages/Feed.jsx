import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Feed() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=50`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes from Spoonacular API');
        }
        return response.json();
      })
      .then((data) => setRecipes(data.recipes))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <div>
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading your feed...</div>
      )}
    </div>
  );
}

export default Feed;