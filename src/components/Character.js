import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from "styled-components";

const StyledCharacters = styled.div`
    display: flex;
    flex-direction: column;
    height: 80%;
    width: 80%;
    margin: 0 auto;
    padding: 1rem;
    background-color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.mainFontFam};

    .char {
        display: flex;
        justify-content: space-between;
        border: 3px solid ${props => props.theme.secondaryColor};
        margin: 1rem;
        padding: 0 1rem;
    }

    .name {
        color: white;
    }

    .birth-year {
        hight: 100%;
        width: 10%;
        padding-top: 3px; 
        border-radius: 3px 8px 3px 8px;
        background-color: #d1d2d6;
        color: #29658a;
    }
` 

export default function Characters(props) {
    return (
        <StyledCharacters>
        {props.characters.map(char => {
            return (
            <div  className='char'>
                <h2 className='name'>{char.name}</h2>
                <h4 className='birth-year'>{char.birth_year}</h4>
            </div>)
        })}
        </StyledCharacters>
    )
        
}
