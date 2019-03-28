import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  text-align: center;
`;

class LinkPage extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Movies Page</h1>
          <StyledLink to="/movies">Movies</StyledLink>
          <h1> Gif Page</h1>
          <StyledLink to="/gifs">Gifs</StyledLink>
          
        </div>
      </div>
    );
  }
}

export default LinkPage;