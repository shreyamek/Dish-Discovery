import { useEffect, useState } from "react";
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"

function Popular() {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async() => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
          );
        const data = await api.json();
        setPopular(data.recipes);
    };

    return (
        <div>
        <Wrapper>
            <Splide
                options={{
                    perPage: 4,
                    arrows: false,
                    pagination: false,
                    drag: "free",
                    gap: "1rem",
                }}
            >
                {popular.map((recipe) => {
                    return (
                        <SplideSlide>
                            <Card>
                                <p className='sideText'>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}></img>

                            </Card>
                        </SplideSlide>
                    );
                })}

            </Splide>
        </Wrapper>   
    </div>
    );

}

const Wrapper = styled.div`
    margin: 2rem 4rem;
`;

const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;

    img {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        left: 50%;
        bottom: 0%;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Popular;