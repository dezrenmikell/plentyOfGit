import React, { Component } from 'react';
import axios from 'axios'
import Thumbs from './Thumbs'

class RandomGif extends Component {
    state = {
        gifUrl: ''
    }

    componentDidMount() {
        this.getRandomGif();
    }

    approve = () => {
        console.log('approve')
        const payload = {
            url: this.state.gifUrl,
            strangeness: 1
        }

        axios.post('https://strange-thing-api.herokuapp.com/api', payload)
    }

    disapprove = () => {
        this.getRandomGif()
    }

    getRandomGif() {
        axios.get('http://api.giphy.com/v1/gifs/random', {
            params: {
                api_key: '5MabVknOVe0UfF5o3GN6Z8IY6a5GgImL',
                rating: 'Y'
            }
        })
            .then((response) => {
                const randomGif = response.data.data.image_url
                this.setState({ gifUrl: randomGif })
            })
    }


    render() {
        return (
            <div>
                <img className="randomGif" src={this.state.gifUrl} alt="" />
                <br />
                <Thumbs approve={this.approve} disapprove={this.disapprove}/>
            </div>
        );
    }
}

export default RandomGif;