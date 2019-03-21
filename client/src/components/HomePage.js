import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1> Welcome to Plenty of Git </h1>
                <Link to="/api/users">Local API</Link>
            </div>
        );
    }
}

export default HomePage;