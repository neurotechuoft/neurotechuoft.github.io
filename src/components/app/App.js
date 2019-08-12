import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from "./HomePage";
import TeamDiv from "../team-div/TeamDiv";
import InitiativesDiv from "../initiatives-div/InitiativesDiv";
import EventsDiv from "../events-div/EventsDiv";
import FAQDiv from "../faq-div/FAQDiv";

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";


function App() {
  return (
    <Router>
      <div className="App">

      <NavBar/>

      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/team" component={TeamDiv}/>
        <Route path="/initiatives" component={InitiativesDiv}/>
        <Route path="/events" component={EventsDiv}/>
        <Route path="/faq" component={FAQDiv}/>
      </Switch>

      <LinksBar/>

      </div>
    </Router>
  );
}

export default App;
