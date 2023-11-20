import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    setLoading(false);
    console.log(recipes.results);
  };

  useEffect(() => {
    setLoading(true);
    getSearched(params.search || '');
  }, [params.search]);

  return (
    <div>
      <Search />
      {loading ? (
        <p>Loading...</p>
      ) : searchedRecipes.length === 0 && params.search ? (
        <p>No results found</p>
      ) : (
        <Grid>
          {searchedRecipes.map((item) => {
            return (
              <Card key={item.id}>
                <a href={`/recipe/${item.id}`}>
                  <img src={item.image} alt={item.title} />
                </a>
                <p>{item.title}</p>
              </Card>
            );
          })}
        </Grid>
      )}
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3rem;
  padding: 5%;
`;

const Card = styled.div`
  img {
    width: 80%;
    border-radius: 2rem;
  }

  p {
    text-align: center;
    margin-top: 1rem;
    font-family: 'Roboto';
    font-size: 80%;
  }
`;

export default Searched;
