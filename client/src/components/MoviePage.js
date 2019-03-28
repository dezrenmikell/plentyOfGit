import React, { Component } from "react";
import axios from "axios";

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
    const savedMovies = this.state.savedMovies.map((movie, index)=>(
        <div key={index}>
        
        <img src={movie.show.image.medium} alt="MISSING"/>
        <p>{movie.show.name}</p>
        </div>
    ));
    return (
      <div>
        <div className="savedMoviesContainer">
          <h3>Movies</h3>
          <div >{savedMovies}</div>
        </div>
      </div>
    );
  }
}
export default MoviePage;
