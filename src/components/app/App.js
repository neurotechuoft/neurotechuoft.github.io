import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import HomePage from "./HomePage";
import JoinPage from "./JoinPage";
import TeamDiv from "../team-div/TeamDiv";
import InitiativesDiv from "../initiatives-div/InitiativesDiv";
import EventsDiv from "../events-div/EventsDiv";
import FAQDiv from "../faq-div/FAQDiv";
import WorkshopsDiv from "../workshops-div/WorkshopsDiv";
import CorticalAppsDiv from "../cortical-apps-div/CorticalAppsDiv";
import AdvancedProjDiv from "../advanced-proj-div/AdvancedProjDiv";
import ApplyForPostionDiv from "../apply-for-position-div/ApplyForPositionDiv";
import UpdatesDiv from "../updates-div/UpdatesDiv";

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";


function App() {
  return (
    <Router>
    <ScrollToTop>
      <div className="App">

      <NavBar/>

      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/join" component={JoinPage}/>
        <Route path="/team" component={TeamDiv}/>
        <Route path="/initiatives" component={InitiativesDiv}/>
        <Route path="/events" component={EventsDiv}/>
        <Route path="/faq" component={FAQDiv}/>
        <Route path="/workshops" component={WorkshopsDiv}/>
        <Route path="/cortical-apps" component={CorticalAppsDiv}/>
        <Route path="/advanced-projects" component={AdvancedProjDiv}/>
        <Route path="/opportunities" component={ApplyForPostionDiv}/>
        <Route path="/updates" component={UpdatesDiv}/>
      </Switch>

      <LinksBar/>

      </div>
    </ScrollToTop>
    </Router>
  );
}

export default App;
