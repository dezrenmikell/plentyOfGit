import React, { Component } from 'react';
import SavedGif from "./SavedGif";
import RandomGif from './RandomGif';

class GifPage extends Component {
    render() {
        return (
            <div>
        <h1>Gif Page</h1>
        <RandomGif/>
        <SavedGif/>
            </div>
        );
    }
}

export default GifPage;