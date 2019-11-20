import React from 'react';
import {Helmet} from 'react-helmet';

import './EventsDiv.scss';

function EventDiv() {
  return(
    <div className="events-div">
      <Helmet>
        <title>Events | NeurotechUofT</title>
      </Helmet>
      <h1>EVENTS</h1>
      <h2>Events, Meetings, and Office Hours Schedule</h2>
      <p>Come hang out with us at our lab space at the Clubhouse!</p>
    </div>
  )
}

export default EventDiv;
