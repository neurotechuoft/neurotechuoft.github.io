import React from 'react';
import {Helmet} from 'react-helmet';

import './EventsDiv.scss';

import NavBar from "../nav-bar/NavBar";
import LinksBar from "../links-bar/LinksBar";

function EventDiv() {
  return(
    <div className="events-div">
      <Helmet>
        <title>Events | NeurotechUofT</title>
      </Helmet>

      <NavBar/>
      
      <h1>EVENTS</h1>
      <h2>Events, Meetings, and Office Hours Schedule</h2>
      <p>Come hang out with us at our lab space at the Clubhouse!</p>

      <LinksBar/>

    </div>
  )
}

export default EventDiv;
