import React from 'react';
import {Helmet} from 'react-helmet';

import './WorkshopsDiv.scss';

function WorkshopsDiv() {
  return(
    <div className="workshops-div">
      <Helmet>
        <title>Workshops | NeurotechUofT</title>
      </Helmet>
      <h1>Workshops</h1>
      <p>
      Begin your journey by making your first neurotech app! Learn to build your
      first circuits, program your first Arduinos, and learn the fundamentals of
      BCI design. <a href="https://www.eventbrite.ca/e/intro-to-neurotech-workshop-series-tickets-73686537417"><b>Get your tickets here by September 29th!</b>.</a>
      </p>
    </div>
  )
}

export default WorkshopsDiv;
