import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './HomePage';
import InitiativesPage from "./InitiativesPage";

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";


function App() {
  return (
    <Router>
      <div className="App">

      <NavBar/>

      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/initiatives" component={InitiativesPage}/>
      </Switch>

      <LinksBar/>

      </div>
    </Router>
  );
}

export default App;
