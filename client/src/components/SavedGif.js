import React, { Component } from 'react';
// 1. import axios
import axios from 'axios'
import Thumbs from './Thumbs'
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

class SavedGif extends Component {
    //2.  create a state where we can store our response
    // from the axios call to our API
    state = {
        savedGifs: []
    }

    //3. use the componentDidMount lifecycle method
    // to execute our API call as soon as the component mounts
    componentDidMount() {
        //4. use axios to call to our API to GET the gifs
        this.getSavedGifs()
    }

    getSavedGifs = () => {
        axios.get('https://strange-thing-api.herokuapp.com/api')
            .then((response) => {
                // once we have the response,
                // setState with the response
                const gifs = response.data.strangeThings
                this.setState({ savedGifs: gifs })
            }).catch((err) => {
                // this catch block tells us when things go wrong
                console.log('you messed up!', err)
            })
    }

    approve = (index) => {
        const updatedState = [ ...this.state.savedGifs ]
        const gif = updatedState[index]
        console.log(gif)
        gif.strangeness += 1
        this.setState({ savedGifs: updatedState })

        axios.patch(`https://strange-thing-api.herokuapp.com/api/${gif._id}`, gif)
    }

    disapprove = (index) => {
        const updatedState = [ ...this.state.savedGifs ]
        const gif = updatedState[index]
        console.log(gif)
        gif.strangeness -= 1
        this.setState({ savedGifs: updatedState })

        axios.patch(`https://strange-thing-api.herokuapp.com/api/${gif._id}`, gif)
        .then(() => {
            if (gif.strangeness < 1) {
                this.getSavedGifs()
            }
        })
    }

    render() {
        const savedGifs = this.state.savedGifs.map((gif, index) => (
            <div className="gif" key={index}>
                <img src={gif.url} alt="" />
                <h3>Score: +{gif.strangeness}</h3>
                <Thumbs approve={() => this.approve(index)} disapprove={() => this.disapprove(index)}/>
            </div>
        ))

        return (
            <div>
                <div>
                    <h1>Previously Saved Gifs</h1>
                    <PageWrapper>
                        {savedGifs}
                    </PageWrapper>
                </div>
            </div>
        );
    }
}

export default SavedGif;