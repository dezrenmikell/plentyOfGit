import React, { Component } from 'react';
import SavedGif from "./SavedGif";
import RandomGif from './RandomGif';
import styled from 'styled-components'

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
border: 7px solid cadetblue;
margin: 0 auto;
background: silver;
align-items: center;
justify-content: center;

margin-top: 30px;

border-radius: 50px;
        align-items: center;
        justify-content: center;
    h1,h3{
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: cadetblue;
        border: 2px solid black
        border-radius: 30px;

    }
    
`;

class GifPage extends Component {
    render() {
        return (
            <PageWrapper>
        <h1>Gif Page</h1>
        <RandomGif/>
        <SavedGif/>
            </PageWrapper>
        );
    }
}

export default GifPage;