import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const PageWrapper = styled.div`
display: flex;
flex-direction: column;
border: 7px solid cadetblue;
margin: 0 auto;
background: silver;

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

class MoviePage extends Component {
  state = {
    savedMovies: []
  };

  componentDidMount() {
    this.getSavedMovies();
  }

  getSavedMovies = () => {
    axios
      .get("https://api.tvmaze.com/search/shows?q=girls")
      .then(response => {
        const movies = response.data;
        this.setState({ savedMovies: movies });
      })
      .catch(err => {
        console.log("you messed up!", err);
      });
  };
  render() {
    const savedMovies = this.state.savedMovies.map((movie, index) => (
      <div key={index}>
        <img src={movie.show.image.medium} alt="MISSING" />
        <h3>{movie.show.name}</h3>
      </div>
    ));
    return (
      <div>
        <PageWrapper>
          <h1>OTHER PEOPLE'S MOVIES</h1>
          <div>{savedMovies}</div>
        </PageWrapper>
      </div>
    );
  }
}
export default MoviePage;
