import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './components/HomePage'
import LogInPage from './components/LogInPage'
import StuffPage from './components/StuffPage';
import Navbar from './components/Navbar'
import MoviePage from './components/RandomMovie'

class App extends Component {
  render() {
    return (
     <Router>
       <div>
         <Navbar/>
       </div>
       <Switch>
         <Route exact path="/" component={HomePage}/>
         <Route path='/login' component={LogInPage}/>
         <Route path='/user/:userId' component={StuffPage}/>
       </Switch>
     </Router>
    );
  }
}

export default App;
