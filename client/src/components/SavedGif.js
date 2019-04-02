import React, { Component } from "react";
import axios from "axios";
import Thumbs from "./Thumbs";
import styled from "styled-components";

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

const Coolimg = styled.div`
img{
width: 245px;
}`

class SavedGif extends Component {
  state = {
    savedGifs: []
  };

  componentDidMount() {
    this.getSavedGifs();
  }

  getSavedGifs = () => {
    axios
      .get("https://strange-thing-api.herokuapp.com/api")
      .then(response => {
        const gifs = response.data.strangeThings;
        this.setState({ savedGifs: gifs });
      })
      .catch(err => {
        console.log("you messed up!", err);
      });
  };

  approve = index => {
    const updatedState = [...this.state.savedGifs];
    const gif = updatedState[index];

    gif.strangeness += 1;
    this.setState({ savedGifs: updatedState });

    axios.patch(`https://strange-thing-api.herokuapp.com/api/${gif._id}`, gif);
  };

  disapprove = index => {
    const updatedState = [...this.state.savedGifs];
    const gif = updatedState[index];

    gif.strangeness -= 1;
    this.setState({ savedGifs: updatedState });

    axios
      .patch(`https://strange-thing-api.herokuapp.com/api/${gif._id}`, gif)
      .then(() => {
        if (gif.strangeness < 1) {
          this.getSavedGifs();
        }
      });
  };

  render() {
    const savedGifs = this.state.savedGifs.map((gif, index) => (
      <div key={index}>
        <Coolimg><img src={gif.url} alt="" /></Coolimg>
        <h3>Score: +{gif.strangeness}</h3>
        <Thumbs
          approve={() => this.approve(index)}
          disapprove={() => this.disapprove(index)}
        />
      </div>
    ));

    return (
      <div>
        <div>
          <h1>Previously Saved Gifs</h1>
          <PageWrapper>{savedGifs}</PageWrapper>
        </div>
      </div>
    );
  }
}

export default SavedGif;
