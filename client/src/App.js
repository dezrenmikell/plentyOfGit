import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import StuffPage from './components/StuffPage'
import Navbar from './components/Navbar'
import MoviePage from './components/MoviePage'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Navbar/>
       </div>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route exact path='/login' component={LogInPage}/>
         <Route exact path='/user/:userId' component={StuffPage}/>
         <Route exact path='/movies' component={MoviePage}/>
       </Switch>
     </Router>
    );
  }
}

export default App;
