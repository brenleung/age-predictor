import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
    background-color: #7f32a8;
    font-family: 'Roboto', sans-serif;
    border: none;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    font-size: 15px;
    padding: 8px 18px;
    border-radius: 8px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #632585;
    }
`

export default function Button({text}) {
    return (
        <StyledButton type="submit">{text}</StyledButton>
    )
}