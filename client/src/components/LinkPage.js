import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
border: 7px solid cadetblue;
margin: 0 auto;
background: silver;

margin-top: 30px;
width: 325px;
border-radius: 50px;
height: 300px;
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
const StyledLink = styled(Link)`
  background: silver;
  border: 4px solid cadetblue;
  border-radius: 8px;
  width: 100px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class LinkPage extends Component {
  render() {
    return (
      <PageWrapper>
        <h1> Check Out Other People's Stuff!</h1>
        <h3> Movies Page</h3>
        <StyledLink to="/movies">Movies</StyledLink>
        <h3> Gif Page</h3>
        <StyledLink to="/gifs">Gifs</StyledLink>
      </PageWrapper>
    );
  }
}

export default LinkPage;
