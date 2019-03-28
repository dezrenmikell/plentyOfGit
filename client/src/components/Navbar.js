import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CoolNav = styled.div`
  background: cadetblue;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: 4px solid black;
  height: 190px;
  margin: 0 auto;
  h1,
  h3 {
    text-align: center;

    align-items: center;
    padding: 0;
  }
`;
const StyledLink = styled(Link)`
  background: silver;
  border: 2px solid black;
  border-radius: 8px;
  width: 100px;
  text-align: center;
`;



class Navbar extends Component {
  render() {
    return (
      <div>
        <CoolNav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/links">Other Stuff</StyledLink>
          <h1>Plenty of Git</h1>
          <h3>It's like Craigslist, but with ALOT more stuff</h3>
          
        </CoolNav>
      </div>
    );
  }
}

export default Navbar;
