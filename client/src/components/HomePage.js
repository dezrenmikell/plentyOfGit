import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: cadetblue;
  border-radius: 20px;
  text-align: center;
  border: 4px solid black;
`;
const StyledLink = styled(Link)`
  margin: 0 auto;
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  text-align: center;
`;

class HomePage extends Component {
  render() {
    return (
      <HomeWrapper>
        <h1> Welcome to Plenty of Git </h1>
        <StyledLink to="/login">Fake Login Page</StyledLink>
      </HomeWrapper>
    );
  }
}

export default HomePage;
