import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, Grid, Heading, useBreakpointValue, Button } from '@chakra-ui/react';
import background from '../BackgroundImage.png';

function Feed() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 52;

  const columns = useBreakpointValue({ base: 1, sm: 2, md: 3, lg: 4 });

  useEffect(() => {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=${recipesPerPage}&page=${currentPage}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch recipes from Spoonacular API');
        }
        return response.json();
      })
      .then((data) => setRecipes(data.recipes))
      .catch((error) => setError(error.message));
  }, [currentPage]);

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Box>
        <br/><br/>
        <Heading as="h2" mb="4">
          Recommended Recipes
        </Heading>
        <br/>
        {recipes.length > 0 ? (
          <>
            <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4} justifyContent="space-between" flexWrap="wrap" padding="0 15vw">
              {recipes.map((recipe) => (
                <Card key={recipe.id} mb="4">
                  <Link to={`/recipe/${recipe.id}`}>
                    <Box>
                      <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
                      <Box p="4">
                        <Heading as="h3" size="md" mb="2">
                          {recipe.title}
                        </Heading>
                      </Box>
                    </Box>
                  </Link>
                </Card>
              ))}
            </Grid>
            <Box mt="4">
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                mr="2"
              >
                Previous
              </Button>
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </Box>
          </>
        ) : (
          <div>No recipes found</div>
        )}
      </Box>
    </div>
  );
}

export default Feed;