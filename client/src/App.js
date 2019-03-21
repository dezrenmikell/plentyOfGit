import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'

class App extends Component {
  render() {
    return (
     <Router>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path='/login' component={LogInPage}/>
       </Switch>
     </Router>
    );
  }
}

export default App;
