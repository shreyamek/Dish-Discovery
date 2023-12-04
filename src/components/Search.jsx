import React from 'react';
import styled from 'styled-components'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    }
    return (
        <FormStyle onSubmit={submitHandler}>
            <div>
                <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Search for a recipe..."/>
                </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0rem 20rem;

    div {
        position: relative;
    }
    input {
        background: #C8E4C0;
        color: black;
        border-radius: 1rem;
        outline: none;
        padding: 2%;
        font-size: 80%;
        font-family: 'Roboto';
        font-weight: 100;
        width: 80%;
    }
`

export default Search